import LoginPopup from '../LoginSignupPop/LoginPopup';
import SignUpPopup from '../LoginSignupPop/SignUpPopup';
import ConfirmEmailModal from '../LoginSignupPop/ConfirmEmailModal';
import NameModal from '../LoginSignupPop/NameModal';
import BirthModal from '../LoginSignupPop/BirthModal';
import AddProfessionalPhoto from '../LoginSignupPop/AddProfessionalPhoto';




const LoginSignupPop = () => {
  const [currentStep, setCurrentStep] = useState(1);

const [userData, setUserData] = useState({
  email: '',
  phNumber: '',
  password: '',
  emailVerificationCode: '',
  phNumberVerificationCode: '',
  firstName: '',
  surname: '',
  birthDate: { day: '', month: '', year: '' },
  gender: '',
  professionalPhoto: '',
});

const closeLoginSignupPop = () => {
    setCurrentStep(0);
    overlayDisappear();
  };

  const overlayClick = (e) => {
    if (e.target.classList.contains(Styles.overlay)) {
      closeLoginSignupPop();
      overlayDisappear();
    }
  }

  const overlayAppear = () => {
    document.querySelector(`.${Styles.overlay}`).style.display = 'block';
  }

  const overlayDisappear = () => {
    document.querySelector(`.${Styles.overlay}`).style.display = 'none';
  }

  const handleLoginSubmit = async (email, password) => {
    try {
      const url = 'http://localhost:5000/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUserData({ ...userData, email, password });
        window.location.href = '/feeds';
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignUpSubmit = async (email, password) => {
    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUserData({ ...userData, email, password });
        setCurrentStep(3); // Move to the next modal
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };


  const handleEmailVerification = async (verificationCode) => {
    try {
      const response = await fetch('/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userData.email, verificationCode }),
      });
      const data = await response.json();
  
      if (response.ok) {
        setUserData({ ...userData, verificationCode });
        setCurrentStep(3); // Move to the next modal
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
    }
  };
  

  const handleNameSubmit = (firstName, surname) => {
    setUserData({ ...userData, firstName, surname });
    setCurrentStep(4);
  };

  const handleBirthSubmit = (birthDate, gender) => {
    setUserData({ ...userData, birthDate, gender });
    setCurrentStep(5);
  };

  const handleComplete = async () => {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
  
      if (response.ok) {
        console.log('Signup complete:', data);
        setCurrentStep(0); // Reset the popup flow
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error completing profile:', error);
    }
  };

  return ( 
    <div className={Styles["login-signup-pop"]} style={{ width: '100vw' , height: '100vh', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
      {currentStep === 1 && (
        <LoginPopup onSubmit={handleLoginSubmit} onClose={() => closeLoginSignupPop()} onSignUp={() => setCurrentStep(2)} />
      )}
      {currentStep === 2 && (
        <SignUpPopup onSubmit={handleSignUpSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 3 && (
        <ConfirmEmailModal onSubmit={handleEmailVerification} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 4 && (
        <NameModal onSubmit={handleNameSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 5 && (
        <BirthModal onSubmit={handleBirthSubmit} onClose={() => closeLoginSignupPop()} />
      )}
      {currentStep === 6 && (
        <AddProfessionalPhoto onComplete={handleComplete} onClose={() => closeLoginSignupPop()} />
      )}

      <div className={Styles.overlay} onClick={overlayClick} />
    </div>
  );
}

export default LoginSignupPop;