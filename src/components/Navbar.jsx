import React from 'react'

const Navbar = () => {
  return (
    <div className = "navbar">
        <span className="brand">TangTalks</span>
        <div className="user">
            <img src = "https://www.wikihow.com/images/thumb/7/70/Draw-Yourself-As-a-Manga-Girl_Boy-Step-12.jpg/aid766412-v4-1200px-Draw-Yourself-As-a-Manga-Girl_Boy-Step-12.jpg" alt = "Profile"/>
            <span>Name</span>
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default Navbar