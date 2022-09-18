import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ArticlePage } from "./components/ArticlePage";
import { ArticleContainer } from "./components/ArticlesContainer";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Routes>
          <Route index element={<ArticleContainer />} />
          <Route path="/@:authorID/:postID" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

{
  /* <div className="articles-container">
  <article>
    <div>
      <div className="article-profile-unit">
        <img
          src="https://miro.medium.com/fit/c/168/168/1*10VCbq-0MZRM0qce6XlONg.jpeg"
          alt=""
          className="article-profile-avatar"
        />
        <p className="article-profile-name">Mimoza Shkodra</p>
      </div>
      <h2 className="article-title">asdad</h2>
      <p className="article-text-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maiores
        laudantium, ullam, facere quidem accusamus deserunt commodi iste illum
        aspernatur inventore numquam nostrum in laboriosam laborum, temporibus
        magni asperiores magnam fugit? Aperiam sit ullam optio ab quaerat
        debitis molestias pariatur, modi quibusdam voluptates vitae ipsa
        provident totam est! Nobis fugit veritatis optio ratione necessitatibus?
        Ratione magni explicabo similique molestiae culpa dignissimos inventore
        unde voluptas. Asperiores ea fuga aperiam, animi nihil pariatur dolore
        vel nam perspiciatis iure laboriosam architecto, provident cum. Officia
        eligendi perferendis dolores doloremque dolor, voluptatibus ad ex quasi
        quis iste voluptatem nam quidem similique veritatis enim laboriosam
        harum!
      </p>
    </div>
    <div>
      <img
        src="https://miro.medium.com/fit/c/168/168/0*1XNXYt44L_x_McEY"
        alt=""
        className="article-image"
      />
    </div>
  </article>
</div>; */
}

export default App;
