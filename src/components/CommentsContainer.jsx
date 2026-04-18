import React from 'react'
import Comment from './Comment'
import { useSelector } from 'react-redux';
const commentData = [
  {
    Name: "Rahul Sharma",
    text: "This is exactly what I was looking for. Thank you!",
    replies: [],
  },
  {
    Name: "Priya Verma",
    text: "Watched this three times already. Still finding new things.",
    replies: [
      {
        Name: "Aman Uniyal",
        text: "Same here, every rewatch feels worth it.",
        replies: [],
      },
    ],
  },
  {
    Name: "Arjun Singh",
    text: "Nobody talks about this topic the way you do. Respect.",
    replies: [],
  },
  {
    Name: "Sneha Kapoor",
    text: "Sent this to my entire friend group. Everyone loved it.",
    replies: [
      {
        Name: "Rohit Mehta",
        text: "Your friends have good taste 😄",
        replies: [],
      },
      {
        Name: "Neha Joshi",
        text: "Haha same, my group is watching it now.",
        replies: [],
      },
    ],
  },
  {
    Name: "Karan Gupta",
    text: "The effort put into this is clearly visible. Well done.",
    replies: [],
  },
  {
    Name: "Simran Kaur",
    text: "I don't usually comment but this deserved one.",
    replies: [
      {
        Name: "Dev Patel",
        text: "Exactly my thoughts. Had to say something.",
        replies: [],
      },
    ],
  },
  {
    Name: "Vikram Rao",
    text: "This channel never disappoints. Subscribed long back.",
    replies: [],
  },
  {
    Name: "Pooja Sharma",
    text: "The way this was explained made everything click instantly.",
    replies: [
      {
        Name: "Nikhil Arora",
        text: "Right? It just made sense from the start.",
        replies: [
          {
            Name: "Aditya Malhotra",
            text: "That's the sign of really good content.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    Name: "Meera Iyer",
    text: "Been following this channel for years. Quality never drops.",
    replies: [],
  },
  {
    Name: "Siddharth Nair",
    text: "Paused just to drop a like and comment. Back to watching.",
    replies: [],
  },
  {
    Name: "Ananya Reddy",
    text: "This hit differently today. Needed this content.",
    replies: [
      {
        Name: "Kabir Bhatia",
        text: "Sometimes the timing of finding something is everything.",
        replies: [],
      },
    ],
  },
  {
    Name: "Riya Malhotra",
    text: "The production quality alone makes this worth watching.",
    replies: [],
  },
  {
    Name: "Ishaan Tiwari",
    text: "Can we appreciate how well structured this is?",
    replies: [
      {
        Name: "Divya Menon",
        text: "Seriously, every section flows into the next perfectly.",
        replies: [
          {
            Name: "Yash Pandey",
            text: "A lot of planning must have gone into this.",
            replies: [],
          },
          {
            Name: "Tanvi Desai",
            text: "You can tell it was made with care.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    Name: "Kunal Bajaj",
    text: "This is the kind of content that actually stays with you.",
    replies: [],
  },
  {
    Name: "Shruti Saxena",
    text: "Left this playing in the background and still couldn't stop paying attention.",
    replies: [],
  },
  {
    Name: "Varun Choudhary",
    text: "The comment section here is just as good as the content.",
    replies: [
      {
        Name: "Aditi Ghosh",
        text: "Haha true, came for the video, stayed for the comments.",
        replies: [],
      },
    ],
  },
  {
    Name: "Nisha Kulkarni",
    text: "Finally someone covered this properly.",
    replies: [],
  },
  {
    Name: "Rohan Mishra",
    text: "Recommended to me by a friend. They were absolutely right.",
    replies: [
      {
        Name: "Palak Agarwal",
        text: "Good friends recommend good content 😄",
        replies: [
          {
            Name: "Rohan Mishra",
            text: "Haha exactly, sharing it forward now.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    Name: "Tanya Khanna",
    text: "I've been searching for this for so long. Glad I found it.",
    replies: [],
  },
  {
    Name: "Manish Dubey",
    text: "This deserves way more views than it has.",
    replies: [
      {
        Name: "Kritika Jain",
        text: "The algorithm really needs to push this more.",
        replies: [],
      },
    ],
  },
  {
    Name: "Gaurav Pillai",
    text: "Coming back to this every few months. Always relevant.",
    replies: [],
  },
  {
    Name: "Avni Rastogi",
    text: "The pacing is just right. Not too fast, not too slow.",
    replies: [],
  },
  {
    Name: "Harsh Srivastava",
    text: "Whoever made this — you genuinely made my day better.",
    replies: [
      {
        Name: "Deepika Bhatt",
        text: "This comment speaks for all of us honestly.",
        replies: [],
      },
      {
        Name: "Sahil Oberoi",
        text: "Couldn't have said it better.",
        replies: [],
      },
    ],
  },
  {
    Name: "Lavanya Pillai",
    text: "Bookmark. This is going in my saved list.",
    replies: [],
  },
  {
    Name: "Aryan Kapoor",
    text: "Still thinking about this hours after watching.",
    replies: [],
  },
  {
    Name: "Komal Sinha",
    text: "Every point landed perfectly. Great work.",
    replies: [
      {
        Name: "Nitin Chauhan",
        text: "Agreed. Nothing felt rushed or padded.",
        replies: [
          {
            Name: "Shweta Yadav",
            text: "That balance is so hard to get right.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    Name: "Raghav Bansal",
    text: "Found this at the right time. Thank you for making this.",
    replies: [],
  },
  {
    Name: "Priyanka Menon",
    text: "One of those rare pieces of content you want everyone to see.",
    replies: [],
  },
  {
    Name: "Ankur Tripathi",
    text: "I appreciate how no time was wasted here. Straight to the point.",
    replies: [
      {
        Name: "Swati Rana",
        text: "Yes! Respects the viewer's time completely.",
        replies: [],
      },
    ],
  },
  {
    Name: "Megha Sethi",
    text: "Notifications on for this channel. Always worth it.",
    replies: [],
  },
  {
    Name: "Abhishek Nambiar",
    text: "Didn't expect to enjoy this as much as I did.",
    replies: [
      {
        Name: "Ritika Sharma",
        text: "The best things are always unexpected 😄",
        replies: [],
      },
    ],
  },
  {
    Name: "Sonal Kapoor",
    text: "Watching this with my morning chai. Perfect combo.",
    replies: [
      {
        Name: "Vivek Joshi",
        text: "Haha same, this is peak morning routine content.",
        replies: [],
      },
    ],
  },
  {
    Name: "Kartik Bhardwaj",
    text: "The detail and care in this is something else.",
    replies: [],
  },
  {
    Name: "Namrata Singh",
    text: "This is why I keep coming back to this channel.",
    replies: [],
  },
];



const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className='ml-14 border-l-2 border-l-black/85'>
              <CommentsList comments={comment.replies} />


            </div>
          </div>
        )
          ;
      })}
    </div>
  );
};
function CommentsContainer() {
  const isDarkMode = useSelector((store) => store.theme.darkMode)
  return (
    <div className={`${isDarkMode ? "bg-gray-800" : ""}`}>

      <h1 className={`text-2xl ${isDarkMode?"text-white":""} font-bold mt-14`}>{commentData.length} Comments</h1>
      <CommentsList comments={commentData} />
    </div>
  )
}

export default CommentsContainer