import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
          <h1>Supun Sudaraka</h1>
          <p>Colombo, Sri Lanka</p>
      </header>
      <section>
          <p>
            Hello there, welcome to my personal website! I'm sorry there's nothing much to see at the moment. I'm still working on creating by developer blog here.
          </p>
          <p>
          In the meantime, you may enjoy my old personal blog (written in Sinhala) <a href="https://blog.sudaraka.com">here.</a>
          </p>
      </section>
      <section>
          <p>
              You can find me on LinkedIn: <a href="https://www.linkedin.com/in/sudaraka">linkedin.com/in/sudaraka</a>
          </p>
      </section>
      <footer>
          &copy; 2023 Supun Sudaraka. All rights reserved.
      </footer>
    </>
  );
}
