import React, { useState } from 'react';
import styles from './Css/Post.module.css';
import { FaThumbsUp, FaComment, FaShare, FaBookmark, FaEllipsisH, FaMapMarkerAlt, FaHeart, FaReply } from 'react-icons/fa';

interface PostData {
  id: number;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isSaved: boolean;
}

interface Reply {
  id: number;
  author: string;
  content: string;
  time: string;
  avatar: string;
  likes: number;
  isLiked: boolean;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  time: string;
  avatar: string;
  likes: number;
  isLiked: boolean;
  replies: Reply[];
  showReplies: boolean;
}

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([
    { id: 1, likes: 87, comments: 23, shares: 12, isLiked: false, isSaved: false },
    { id: 2, likes: 142, comments: 31, shares: 18, isLiked: false, isSaved: false },
    { id: 3, likes: 93, comments: 17, shares: 8, isLiked: false, isSaved: false },
    { id: 4, likes: 156, comments: 42, shares: 25, isLiked: false, isSaved: false }
  ]);

  const [activeCommentBox, setActiveCommentBox] = useState<number | null>(null);
  const [commentText, setCommentText] = useState<string>('');
  const [replyText, setReplyText] = useState<string>('');
  const [activeReplyBox, setActiveReplyBox] = useState<number | null>(null);
  const [postComments, setPostComments] = useState<{ [key: number]: Comment[] }>({
    1: [
      { 
        id: 1, 
        author: 'John Smith', 
        content: 'Great insights! Thanks for sharing.', 
        time: '2h', 
        avatar: 'https://i.pravatar.cc/150?img=2',
        likes: 5,
        isLiked: false,
        replies: [
          {
            id: 101,
            author: 'Sarah Johnson',
            content: 'Totally agree! The workshop was amazing.',
            time: '1h',
            avatar: 'https://i.pravatar.cc/150?img=5',
            likes: 2,
            isLiked: false
          }
        ],
        showReplies: true
      },
      { 
        id: 2, 
        author: 'Maria Garcia', 
        content: 'This is exactly what our team needed to hear.', 
        time: '1h', 
        avatar: 'https://i.pravatar.cc/150?img=4',
        likes: 8,
        isLiked: true,
        replies: [],
        showReplies: false
      }
    ],
    2: [
      { 
        id: 1, 
        author: 'Robert Johnson', 
        content: 'Impressive performance improvements!', 
        time: '3h', 
        avatar: 'https://i.pravatar.cc/150?img=6',
        likes: 12,
        isLiked: false,
        replies: [],
        showReplies: false
      }
    ],
    3: [],
    4: [
      { 
        id: 1, 
        author: 'Sarah Wilson', 
        content: 'The future is definitely exciting!', 
        time: '1d', 
        avatar: 'https://i.pravatar.cc/150?img=8',
        likes: 3,
        isLiked: false,
        replies: [],
        showReplies: false
      }
    ]
  });

  const handleLike = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const handleSave = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
  };

  const handleComment = (postId: number) => {
    setActiveCommentBox(activeCommentBox === postId ? null : postId);
    setCommentText('');
    setActiveReplyBox(null);
  };

  const handleAddComment = (postId: number) => {
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      author: 'Your Name',
      content: commentText,
      time: 'now',
      avatar: 'https://i.pravatar.cc/150?img=52',
      likes: 0,
      isLiked: false,
      replies: [],
      showReplies: false
    };

    setPostComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment]
    }));

    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, comments: post.comments + 1 }
        : post
    ));

    setCommentText('');
  };

  const handleLikeComment = (postId: number, commentId: number) => {
    setPostComments(prev => ({
      ...prev,
      [postId]: prev[postId]?.map(comment => 
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
            }
          : comment
      ) || []
    }));
  };

  const handleReply = (commentId: number) => {
    setActiveReplyBox(activeReplyBox === commentId ? null : commentId);
    setReplyText('');
  };

  const handleAddReply = (postId: number, commentId: number) => {
    if (!replyText.trim()) return;

    const newReply: Reply = {
      id: Date.now(),
      author: 'Your Name',
      content: replyText,
      time: 'now',
      avatar: 'https://i.pravatar.cc/150?img=52',
      likes: 0,
      isLiked: false
    };

    setPostComments(prev => ({
      ...prev,
      [postId]: prev[postId]?.map(comment => 
        comment.id === commentId
          ? {
              ...comment,
              replies: [...comment.replies, newReply],
              showReplies: true
            }
          : comment
      ) || []
    }));

    setReplyText('');
    setActiveReplyBox(null);
  };

  const handleLikeReply = (postId: number, commentId: number, replyId: number) => {
    setPostComments(prev => ({
      ...prev,
      [postId]: prev[postId]?.map(comment => 
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === replyId
                  ? {
                      ...reply,
                      isLiked: !reply.isLiked,
                      likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1
                    }
                  : reply
              )
            }
          : comment
      ) || []
    }));
  };

  const toggleReplies = (postId: number, commentId: number) => {
    setPostComments(prev => ({
      ...prev,
      [postId]: prev[postId]?.map(comment => 
        comment.id === commentId
          ? { ...comment, showReplies: !comment.showReplies }
          : comment
      ) || []
    }));
  };

  const handleShare = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, shares: post.shares + 1 }
        : post
    ));
    alert(`Post ${postId} shared!`);
  };

  return (
    <div className={styles.container}>
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Main Post */}
        <div className={styles.post1}>
        <div className={styles.post}>
          {/* Post Header */}
          <div className={styles.frame4}>
            <div className={styles.frame3}>
              <div className={styles.pfpAndName}>
                <div className={styles.pfp}></div>
                <div className={styles.frame2}>
                  <div className={styles.sarahJohnson}>Sarah Johnson</div>
                  <div className={styles.uxDesigner}>UX Designer at Google</div>
                  <div className={styles.timeAgo}>11 hours ago</div>
                </div>
              </div>
              <FaEllipsisH className={styles.moreIcon} />
            </div>
            
            {/* Post Content */}
            <div className={styles.postContent}>
              Just finished a fascinating workshop on design systems. The way we approach consistency in product design is evolving rapidly. Anyone else exploring this area?
            </div>
          </div>
          
          {/* Post Image */}
          <div className={styles.image1}></div>
          
          {/* Post Stats */}
          <div className={styles.frame6}>
            <div className={styles.postStats}>
              {posts[0].likes} likes • {posts[0].comments} comments • {posts[0].shares} shares
            </div>
          </div>
        </div>
        
        {/* Interaction Buttons */}
        <div className={styles.interactionAndSave}>
          <div className={styles.interactions}>
            <div 
              className={`${styles.like} ${posts[0].isLiked ? styles.liked : ''}`}
              onClick={() => handleLike(1)}
            >
              {posts[0].isLiked ? (
                <FaHeart className={`${styles.actionIcon} ${styles.heartIcon}`} />
              ) : (
                <FaThumbsUp className={styles.actionIcon} />
              )}
              <span className={styles.actionText}>Like</span>
            </div>
            <div 
              className={styles.comment}
              onClick={() => handleComment(1)}
            >
              <FaComment className={styles.actionIcon} />
              <span className={styles.actionText}>Comment</span>
            </div>
            <div 
              className={styles.share}
              onClick={() => handleShare(1)}
            >
              <FaShare className={styles.actionIcon} />
              <span className={styles.actionText}>Share</span>
            </div>
          </div>
          <div 
            className={`${styles.save} ${posts[0].isSaved ? styles.saved : ''}`}
            onClick={() => handleSave(1)}
          >
            <FaBookmark className={styles.saveIcon} />
          </div>
        </div>

        {/* Comment Section for Post 1 */}
        {activeCommentBox === 1 && (
          <div className={styles.commentSection}>
            {/* Existing Comments */}
            {postComments[1]?.map((comment) => (
              <div key={comment.id} className={styles.commentThread}>
                <div className={styles.commentItem}>
                  <div className={styles.commentAvatar} style={{backgroundImage: `url('${comment.avatar}')`}}></div>
                  <div className={styles.commentContent}>
                    <div className={styles.commentBubble}>
                      <div className={styles.commentAuthor}>{comment.author}</div>
                      <div className={styles.commentText}>{comment.content}</div>
                    </div>
                    <div className={styles.commentMeta}>
                      <span className={styles.commentTime}>{comment.time}</span>
                      <span 
                        className={`${styles.commentAction} ${comment.isLiked ? styles.liked : ''}`}
                        onClick={() => handleLikeComment(1, comment.id)}
                      >
                        <FaThumbsUp className={styles.commentLikeIcon} />
                        Like {comment.likes > 0 && `(${comment.likes})`}
                      </span>
                      <span 
                        className={styles.commentAction}
                        onClick={() => handleReply(comment.id)}
                      >
                        <FaReply className={styles.commentReplyIcon} />
                        Reply
                      </span>
                      {comment.replies.length > 0 && (
                        <span 
                          className={styles.commentAction}
                          onClick={() => toggleReplies(1, comment.id)}
                        >
                          {comment.showReplies ? 'Hide' : 'Show'} {comment.replies.length} replies
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.showReplies && comment.replies.map((reply) => (
                  <div key={reply.id} className={styles.replyItem}>
                    <div className={styles.commentAvatar} style={{backgroundImage: `url('${reply.avatar}')`}}></div>
                    <div className={styles.commentContent}>
                      <div className={styles.commentBubble}>
                        <div className={styles.commentAuthor}>{reply.author}</div>
                        <div className={styles.commentText}>{reply.content}</div>
                      </div>
                      <div className={styles.commentMeta}>
                        <span className={styles.commentTime}>{reply.time}</span>
                        <span 
                          className={`${styles.commentAction} ${reply.isLiked ? styles.liked : ''}`}
                          onClick={() => handleLikeReply(1, comment.id, reply.id)}
                        >
                          <FaThumbsUp className={styles.commentLikeIcon} />
                          Like {reply.likes > 0 && `(${reply.likes})`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Reply Input Box */}
                {activeReplyBox === comment.id && (
                  <div className={styles.replyInputSection}>
                    <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
                    <div className={styles.commentInputBox}>
                      <textarea
                        className={styles.commentInput}
                        placeholder={`Reply to ${comment.author}...`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddReply(1, comment.id);
                          }
                        }}
                      />
                      <button 
                        className={styles.commentPostBtn}
                        onClick={() => handleAddReply(1, comment.id)}
                        disabled={!replyText.trim()}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Comment Input Box */}
            <div className={styles.commentInputSection}>
              <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
              <div className={styles.commentInputBox}>
                <textarea
                  className={styles.commentInput}
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleAddComment(1);
                    }
                  }}
                />
                <button 
                  className={styles.commentPostBtn}
                  onClick={() => handleAddComment(1)}
                  disabled={!commentText.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post 2 */}
      <div className={styles.post1}>
        <div className={styles.post}>
          {/* Post Header */}
          <div className={styles.frame4}>
            <div className={styles.frame3}>
              <div className={styles.pfpAndName}>
                <div className={styles.pfp} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=5')"}}></div>
                <div className={styles.frame2}>
                  <div className={styles.sarahJohnson}>Michael Thompson</div>
                  <div className={styles.uxDesigner}>Software Engineer at Microsoft</div>
                  <div className={styles.timeAgo}>6 hours ago</div>
                </div>
              </div>
              <FaEllipsisH className={styles.moreIcon} />
            </div>
            
            {/* Post Content */}
            <div className={styles.postContent}>
              Excited to share that our team just deployed a new feature that improves app performance by 40%! The power of optimized algorithms and clean code never ceases to amaze me. #SoftwareDevelopment #Performance
            </div>
          </div>
          
          {/* Post Image */}
          <div className={styles.image1} style={{backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop')"}}></div>
          
          {/* Post Stats */}
          <div className={styles.frame6}>
            <div className={styles.postStats}>
              {posts[1].likes} likes • {posts[1].comments} comments • {posts[1].shares} shares
            </div>
          </div>
        </div>
        
        {/* Interaction Buttons */}
        <div className={styles.interactionAndSave}>
          <div className={styles.interactions}>
            <div 
              className={`${styles.like} ${posts[1].isLiked ? styles.liked : ''}`}
              onClick={() => handleLike(2)}
            >
              {posts[1].isLiked ? (
                <FaHeart className={`${styles.actionIcon} ${styles.heartIcon}`} />
              ) : (
                <FaThumbsUp className={styles.actionIcon} />
              )}
              <span className={styles.actionText}>Like</span>
            </div>
            <div 
              className={styles.comment}
              onClick={() => handleComment(2)}
            >
              <FaComment className={styles.actionIcon} />
              <span className={styles.actionText}>Comment</span>
            </div>
            <div 
              className={styles.share}
              onClick={() => handleShare(2)}
            >
              <FaShare className={styles.actionIcon} />
              <span className={styles.actionText}>Share</span>
            </div>
          </div>
          <div 
            className={`${styles.save} ${posts[1].isSaved ? styles.saved : ''}`}
            onClick={() => handleSave(2)}
          >
            <FaBookmark className={styles.saveIcon} />
          </div>
        </div>

        {/* Comment Section for Post 2 */}
        {activeCommentBox === 2 && (
          <div className={styles.commentSection}>
            {/* Existing Comments */}
            {postComments[2]?.map((comment) => (
              <div key={comment.id} className={styles.commentThread}>
                <div className={styles.commentItem}>
                  <div className={styles.commentAvatar} style={{backgroundImage: `url('${comment.avatar}')`}}></div>
                  <div className={styles.commentContent}>
                    <div className={styles.commentBubble}>
                      <div className={styles.commentAuthor}>{comment.author}</div>
                      <div className={styles.commentText}>{comment.content}</div>
                    </div>
                    <div className={styles.commentMeta}>
                      <span className={styles.commentTime}>{comment.time}</span>
                      <span 
                        className={`${styles.commentAction} ${comment.isLiked ? styles.liked : ''}`}
                        onClick={() => handleLikeComment(2, comment.id)}
                      >
                        <FaThumbsUp className={styles.commentLikeIcon} />
                        Like {comment.likes > 0 && `(${comment.likes})`}
                      </span>
                      <span 
                        className={styles.commentAction}
                        onClick={() => handleReply(comment.id)}
                      >
                        <FaReply className={styles.commentReplyIcon} />
                        Reply
                      </span>
                      {comment.replies.length > 0 && (
                        <span 
                          className={styles.commentAction}
                          onClick={() => toggleReplies(2, comment.id)}
                        >
                          {comment.showReplies ? 'Hide' : 'Show'} {comment.replies.length} replies
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.showReplies && comment.replies.map((reply) => (
                  <div key={reply.id} className={styles.replyItem}>
                    <div className={styles.commentAvatar} style={{backgroundImage: `url('${reply.avatar}')`}}></div>
                    <div className={styles.commentContent}>
                      <div className={styles.commentBubble}>
                        <div className={styles.commentAuthor}>{reply.author}</div>
                        <div className={styles.commentText}>{reply.content}</div>
                      </div>
                      <div className={styles.commentMeta}>
                        <span className={styles.commentTime}>{reply.time}</span>
                        <span 
                          className={`${styles.commentAction} ${reply.isLiked ? styles.liked : ''}`}
                          onClick={() => handleLikeReply(2, comment.id, reply.id)}
                        >
                          <FaThumbsUp className={styles.commentLikeIcon} />
                          Like {reply.likes > 0 && `(${reply.likes})`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Reply Input Box */}
                {activeReplyBox === comment.id && (
                  <div className={styles.replyInputSection}>
                    <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
                    <div className={styles.commentInputBox}>
                      <textarea
                        className={styles.commentInput}
                        placeholder={`Reply to ${comment.author}...`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddReply(2, comment.id);
                          }
                        }}
                      />
                      <button 
                        className={styles.commentPostBtn}
                        onClick={() => handleAddReply(2, comment.id)}
                        disabled={!replyText.trim()}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Comment Input Box */}
            <div className={styles.commentInputSection}>
              <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
              <div className={styles.commentInputBox}>
                <textarea
                  className={styles.commentInput}
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleAddComment(2);
                    }
                  }}
                />
                <button 
                  className={styles.commentPostBtn}
                  onClick={() => handleAddComment(2)}
                  disabled={!commentText.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post 3 */}
      <div className={styles.post1}>
        <div className={styles.post}>
          {/* Post Header */}
          <div className={styles.frame4}>
            <div className={styles.frame3}>
              <div className={styles.pfpAndName}>
                <div className={styles.pfp} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=7')"}}></div>
                <div className={styles.frame2}>
                  <div className={styles.sarahJohnson}>Jessica Martinez</div>
                  <div className={styles.uxDesigner}>Marketing Manager at Adobe</div>
                  <div className={styles.timeAgo}>1 day ago</div>
                </div>
              </div>
              <FaEllipsisH className={styles.moreIcon} />
            </div>
            
            {/* Post Content */}
            <div className={styles.postContent}>
              Just attended an incredible conference on digital transformation. The keynote about AI's impact on creative industries was mind-blowing. The future is here and it's exciting! Who else was there?
            </div>
          </div>
          
          {/* Post Image */}
          <div className={styles.image1} style={{backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop')"}}></div>
          
          {/* Post Stats */}
          <div className={styles.frame6}>
            <div className={styles.postStats}>
              {posts[2].likes} likes • {posts[2].comments} comments • {posts[2].shares} shares
            </div>
          </div>
        </div>
        
        {/* Interaction Buttons */}
        <div className={styles.interactionAndSave}>
          <div className={styles.interactions}>
            <div 
              className={`${styles.like} ${posts[2].isLiked ? styles.liked : ''}`}
              onClick={() => handleLike(3)}
            >
              {posts[2].isLiked ? (
                <FaHeart className={`${styles.actionIcon} ${styles.heartIcon}`} />
              ) : (
                <FaThumbsUp className={styles.actionIcon} />
              )}
              <span className={styles.actionText}>Like</span>
            </div>
            <div 
              className={styles.comment}
              onClick={() => handleComment(3)}
            >
              <FaComment className={styles.actionIcon} />
              <span className={styles.actionText}>Comment</span>
            </div>
            <div 
              className={styles.share}
              onClick={() => handleShare(3)}
            >
              <FaShare className={styles.actionIcon} />
              <span className={styles.actionText}>Share</span>
            </div>
          </div>
          <div 
            className={`${styles.save} ${posts[2].isSaved ? styles.saved : ''}`}
            onClick={() => handleSave(3)}
          >
            <FaBookmark className={styles.saveIcon} />
          </div>
        </div>

        {/* Comment Section for Post 3 */}
        {activeCommentBox === 3 && (
          <div className={styles.commentSection}>
            {/* Existing Comments */}
            {postComments[3]?.map((comment) => (
              <div key={comment.id} className={styles.commentThread}>
                <div className={styles.commentItem}>
                  <div className={styles.commentAvatar} style={{backgroundImage: `url('${comment.avatar}')`}}></div>
                  <div className={styles.commentContent}>
                    <div className={styles.commentBubble}>
                      <div className={styles.commentAuthor}>{comment.author}</div>
                      <div className={styles.commentText}>{comment.content}</div>
                    </div>
                    <div className={styles.commentMeta}>
                      <span className={styles.commentTime}>{comment.time}</span>
                      <span 
                        className={`${styles.commentAction} ${comment.isLiked ? styles.liked : ''}`}
                        onClick={() => handleLikeComment(3, comment.id)}
                      >
                        <FaThumbsUp className={styles.commentLikeIcon} />
                        Like {comment.likes > 0 && `(${comment.likes})`}
                      </span>
                      <span 
                        className={styles.commentAction}
                        onClick={() => handleReply(comment.id)}
                      >
                        <FaReply className={styles.commentReplyIcon} />
                        Reply
                      </span>
                      {comment.replies.length > 0 && (
                        <span 
                          className={styles.commentAction}
                          onClick={() => toggleReplies(3, comment.id)}
                        >
                          {comment.showReplies ? 'Hide' : 'Show'} {comment.replies.length} replies
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.showReplies && comment.replies.map((reply) => (
                  <div key={reply.id} className={styles.replyItem}>
                    <div className={styles.commentAvatar} style={{backgroundImage: `url('${reply.avatar}')`}}></div>
                    <div className={styles.commentContent}>
                      <div className={styles.commentBubble}>
                        <div className={styles.commentAuthor}>{reply.author}</div>
                        <div className={styles.commentText}>{reply.content}</div>
                      </div>
                      <div className={styles.commentMeta}>
                        <span className={styles.commentTime}>{reply.time}</span>
                        <span 
                          className={`${styles.commentAction} ${reply.isLiked ? styles.liked : ''}`}
                          onClick={() => handleLikeReply(3, comment.id, reply.id)}
                        >
                          <FaThumbsUp className={styles.commentLikeIcon} />
                          Like {reply.likes > 0 && `(${reply.likes})`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Reply Input Box */}
                {activeReplyBox === comment.id && (
                  <div className={styles.replyInputSection}>
                    <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
                    <div className={styles.commentInputBox}>
                      <textarea
                        className={styles.commentInput}
                        placeholder={`Reply to ${comment.author}...`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddReply(3, comment.id);
                          }
                        }}
                      />
                      <button 
                        className={styles.commentPostBtn}
                        onClick={() => handleAddReply(3, comment.id)}
                        disabled={!replyText.trim()}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Comment Input Box */}
            <div className={styles.commentInputSection}>
              <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
              <div className={styles.commentInputBox}>
                <textarea
                  className={styles.commentInput}
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleAddComment(3);
                    }
                  }}
                />
                <button 
                  className={styles.commentPostBtn}
                  onClick={() => handleAddComment(3)}
                  disabled={!commentText.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post 4 */}
      <div className={styles.post1}>
        <div className={styles.post}>
          {/* Post Header */}
          <div className={styles.frame4}>
            <div className={styles.frame3}>
              <div className={styles.pfpAndName}>
                <div className={styles.pfp} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=11')"}}></div>
                <div className={styles.frame2}>
                  <div className={styles.sarahJohnson}>Alex Rodriguez</div>
                  <div className={styles.uxDesigner}>Data Analyst at Netflix</div>
                  <div className={styles.timeAgo}>2 days ago</div>
                </div>
              </div>
              <FaEllipsisH className={styles.moreIcon} />
            </div>
            
            {/* Post Content */}
            <div className={styles.postContent}>
              Data visualization can tell amazing stories! Just completed an analysis showing user engagement patterns that will reshape our content strategy. Love how numbers can drive meaningful decisions. 📊
            </div>
          </div>
          
          {/* Post Image */}
          <div className={styles.image1} style={{backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop')"}}></div>
          
          {/* Post Stats */}
          <div className={styles.frame6}>
            <div className={styles.postStats}>
              {posts[3].likes} likes • {posts[3].comments} comments • {posts[3].shares} shares
            </div>
          </div>
        </div>
        
        {/* Interaction Buttons */}
        <div className={styles.interactionAndSave}>
          <div className={styles.interactions}>
            <div 
              className={`${styles.like} ${posts[3].isLiked ? styles.liked : ''}`}
              onClick={() => handleLike(4)}
            >
              {posts[3].isLiked ? (
                <FaHeart className={`${styles.actionIcon} ${styles.heartIcon}`} />
              ) : (
                <FaThumbsUp className={styles.actionIcon} />
              )}
              <span className={styles.actionText}>Like</span>
            </div>
            <div 
              className={styles.comment}
              onClick={() => handleComment(4)}
            >
              <FaComment className={styles.actionIcon} />
              <span className={styles.actionText}>Comment</span>
            </div>
            <div 
              className={styles.share}
              onClick={() => handleShare(4)}
            >
              <FaShare className={styles.actionIcon} />
              <span className={styles.actionText}>Share</span>
            </div>
          </div>
          <div 
            className={`${styles.save} ${posts[3].isSaved ? styles.saved : ''}`}
            onClick={() => handleSave(4)}
          >
            <FaBookmark className={styles.saveIcon} />
          </div>
        </div>

        {/* Comment Section for Post 4 */}
        {activeCommentBox === 4 && (
          <div className={styles.commentSection}>
            {/* Existing Comments */}
            {postComments[4]?.map((comment) => (
              <div key={comment.id} className={styles.commentThread}>
                <div className={styles.commentItem}>
                  <div className={styles.commentAvatar} style={{backgroundImage: `url('${comment.avatar}')`}}></div>
                  <div className={styles.commentContent}>
                    <div className={styles.commentBubble}>
                      <div className={styles.commentAuthor}>{comment.author}</div>
                      <div className={styles.commentText}>{comment.content}</div>
                    </div>
                    <div className={styles.commentMeta}>
                      <span className={styles.commentTime}>{comment.time}</span>
                      <span 
                        className={`${styles.commentAction} ${comment.isLiked ? styles.liked : ''}`}
                        onClick={() => handleLikeComment(4, comment.id)}
                      >
                        <FaThumbsUp className={styles.commentLikeIcon} />
                        Like {comment.likes > 0 && `(${comment.likes})`}
                      </span>
                      <span 
                        className={styles.commentAction}
                        onClick={() => handleReply(comment.id)}
                      >
                        <FaReply className={styles.commentReplyIcon} />
                        Reply
                      </span>
                      {comment.replies.length > 0 && (
                        <span 
                          className={styles.commentAction}
                          onClick={() => toggleReplies(4, comment.id)}
                        >
                          {comment.showReplies ? 'Hide' : 'Show'} {comment.replies.length} replies
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.showReplies && comment.replies.map((reply) => (
                  <div key={reply.id} className={styles.replyItem}>
                    <div className={styles.commentAvatar} style={{backgroundImage: `url('${reply.avatar}')`}}></div>
                    <div className={styles.commentContent}>
                      <div className={styles.commentBubble}>
                        <div className={styles.commentAuthor}>{reply.author}</div>
                        <div className={styles.commentText}>{reply.content}</div>
                      </div>
                      <div className={styles.commentMeta}>
                        <span className={styles.commentTime}>{reply.time}</span>
                        <span 
                          className={`${styles.commentAction} ${reply.isLiked ? styles.liked : ''}`}
                          onClick={() => handleLikeReply(4, comment.id, reply.id)}
                        >
                          <FaThumbsUp className={styles.commentLikeIcon} />
                          Like {reply.likes > 0 && `(${reply.likes})`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Reply Input Box */}
                {activeReplyBox === comment.id && (
                  <div className={styles.replyInputSection}>
                    <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
                    <div className={styles.commentInputBox}>
                      <textarea
                        className={styles.commentInput}
                        placeholder={`Reply to ${comment.author}...`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddReply(4, comment.id);
                          }
                        }}
                      />
                      <button 
                        className={styles.commentPostBtn}
                        onClick={() => handleAddReply(4, comment.id)}
                        disabled={!replyText.trim()}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Comment Input Box */}
            <div className={styles.commentInputSection}>
              <div className={styles.commentInputAvatar} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=52')"}}></div>
              <div className={styles.commentInputBox}>
                <textarea
                  className={styles.commentInput}
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleAddComment(4);
                    }
                  }}
                />
                <button 
                  className={styles.commentPostBtn}
                  onClick={() => handleAddComment(4)}
                  disabled={!commentText.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* Sidebar Area */}
      <div className={styles.sidebarArea}>
        {/* People You May Know Sidebar */}
        <div className={styles.otherFollowers}>
        <div className={styles.frame8}>
          <div className={styles.peopleYouMayKnow}>People you may know</div>
          <div className={styles.frame7}>
                         {/* Person 1 */}
            <div className={styles.pfp1}>
              <div className={styles.nameSection}>
                <div className={styles.pfpSmall} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=1')"}}></div>
                <div className={styles.nameDetails}>
                  <div className={styles.personName}>Emily Rodriguez</div>
                  <div className={styles.personTitle}>Marketing Director at TechCorp</div>
                </div>
              </div>
              <button className={styles.cta}>
                <span className={styles.followText}>Follow</span>
              </button>
            </div>

            {/* Person 2 */}
            <div className={styles.pfp2}>
              <div className={styles.nameSection}>
                <div className={styles.pfpSmall} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=3')"}}></div>
                <div className={styles.nameDetails}>
                  <div className={styles.personName}>David Kim</div>
                  <div className={styles.personTitle}>Product Manager at StartupX</div>
                </div>
              </div>
              <button className={styles.cta}>
                <span className={styles.followText}>Follow</span>
              </button>
            </div>

            {/* Person 3 */}
            <div className={styles.pfp3}>
              <div className={styles.nameSection}>
                <div className={styles.pfpSmall} style={{backgroundImage: "url('https://i.pravatar.cc/150?img=9')"}}></div>
                <div className={styles.nameDetails}>
                  <div className={styles.personName}>Lisa Chen</div>
                  <div className={styles.personTitle}>Data Scientist at AnalyticsPro</div>
                </div>
              </div>
              <button className={styles.cta}>
                <span className={styles.followText}>Follow</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.frame10}>
          <div className={styles.viewAllSuggestion}>View all Suggestion</div>
        </div>
      </div>

      {/* Events Section */}
      <div className={styles.eventsSection}>
        <div className={styles.frame14}>
          <div className={styles.heading}>
            <div className={styles.upcomingEvents}>Upcoming Events</div>
          </div>
          
          <div className={styles.events}>
            {/* Event 1 */}
            <div className={styles.frame13}>
              <div className={styles.eventTitle}>Tech Networking Mixer</div>
              <div className={styles.frame11}>
                <span className={styles.eventDate}>April 30, 2025</span>
                <span className={styles.eventTime}>6:00 pm-8:00pm</span>
              </div>
              <div className={styles.frame12}>
                <FaMapMarkerAlt className={styles.locationIcon} />
                <span className={styles.virtual}>Virtual</span>
              </div>
            </div>

            {/* Event 2 */}
            <div className={styles.frame13}>
              <div className={styles.eventTitle}>Career Development Workshop</div>
              <div className={styles.frame11}>
                <span className={styles.eventDate}>May 2, 2025</span>
                <span className={styles.eventTime}>6:00 pm-8:00pm</span>
              </div>
              <div className={styles.frame12}>
                <FaMapMarkerAlt className={styles.locationIcon} />
                <span className={styles.virtual}>Virtual</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.link}>
          <div className={styles.browseAllEvents}>Browse all events</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Post;
