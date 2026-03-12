import React from 'react'
import Comment from './Comment'
const commentData = [
  {
    Name: "Rahul Sharma",
    text: "Great explanation! Learned a lot.",
    replies: [],
  },
  {
    Name: "Aman Uniyal",
    text: "This tutorial really helped me understand recursion.",
    replies: [
      {
        Name: "Priya Verma",
        text: "Same here! The nested comments example was awesome.",
        replies: [],
      },
      {
        Name: "Rohit Mehta",
        text: "Can someone explain how recursion works here?",
        replies: [
          {
            Name: "Sneha Kapoor",
            text: "The component calls itself for every reply array.",
            replies: [],
          },
          {
            Name: "Arjun Singh",
            text: "Yes exactly. That's why it's called a recursive component.",
            replies: [
              {
                Name: "Karan Gupta",
                text: "Ohh now I get it. Similar to tree traversal!",
                replies: [],
              },
              {
                Name: "Neha Joshi",
                text: "Right! Each reply becomes a child node.",
                replies: [
                  {
                    Name: "Dev Patel",
                    text: "This is exactly how YouTube comment threads work.",
                    replies: [],
                  },
                  {
                    Name: "Simran Kaur",
                    text: "Now the concept is much clearer.",
                    replies: [
                      {
                        Name: "Vikram Rao",
                        text: "Recursive UI rendering is very powerful in React.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Name: "Aditya Malhotra",
    text: "Waiting for the next part of this series!",
    replies: [],
  },
  {
    Name: "Pooja Sharma",
    text: "This was one of the best React tutorials I have seen.",
    replies: [
      {
        Name: "Nikhil Arora",
        text: "Totally agree with you 👍",
        replies: [],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => {
                return (
                    <div key={index}>
                        <Comment  data={comment} />
                        <div className='ml-14 border-l-2 border-l-black/85'>
                         <CommentsList comments={comment.replies}/>


                        </div>
                    </div>
                )
                    ;
            })}
        </div>
    );
};
function CommentsContainer() {
    return (
        <div>

            <h1 className='text-2xl font-bold mt-5'>Comments</h1>
            <CommentsList comments={commentData} />
        </div>
    )
}

export default CommentsContainer