import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <>
      <Navbar />
      <main className={`md:pt-14 `}>
        {/* Hero Section */}
        <section
          className={`hero-section w-full h-108 flex pt-12 md:justify-start justify-center md:items-start items-center`}
        >
          <div className={`md:w-1/2 w-4/5 md:pl-48 text-lef md:p-0 p-6`}>
            <h1
              className={`lg:text-4xl md:text-3xl text-5xl font-bold text-orange-300`}
            >
              Innovation for education and society
            </h1>
            <p className={`text-left md:text-md text-lg text-gray-600`}>
              Our interdisciplinary majors and minors mean you can chart your
              own course for academic sucess.
            </p>
            <button
              className={`rounded-full bg-orange-300 pl-6 pr-6 h-12 text-white mt-4 hover:border-2 hover:bg-white hover:text-black border-orange-300`}
            >
              Visit out campus
            </button>
          </div>
        </section>
        {/* Hero Section */}
        {/* ----------------------------------------------------------------------------- */}
        {/* Second Section */}
        <section className={`w-full flex flex-col gap-8 items-center`}>
          <div
            className={`md:w-full w-4/5 flex flex-col justify-center items-center gap-2`}
          >
            <h2 className={`text-4xl text-black font-bold text-center`}>
              Our Department
            </h2>
            <p className={`text-center md:w-2/5 text-gray-600`}>
              A hundred thousand grateful loves to your dear papa and mamma. Is
              your poor brother recovered of his rack-punch? Oh, dear! Oh, dear!
              How men should beware of wicked punch!
            </p>
          </div>
          <div
            className={`w-full flex md:flex-row gap-4 justify-center items-center md:pl-6 md:pr-6 flex-col`}
          >
            <Card
              label="Online Education"
              imageUrl="/src/assets/Card1Img.webp"
            />
            <Card
              label="Online Education"
              imageUrl="/src/assets/Card2Img.webp"
            />
            <Card
              label="Online Education"
              imageUrl="/src/assets/Card3Img.webp"
            />
          </div>
        </section>
        {/* Second Section */}
        {/* ----------------------------------------------------------------------------- */}
        {/* Third Section */}
        <section
          className={`w-full flex md:flex-row gap-4 justify-center md:pl-6 md:pr-6 flex-col`}
        >
          <div
            className={`lg:w-auto md:w-1/2 flex justify-center items-center relative`}
          >
            <div
              className={`absolute w-64 h-64 -z-20 md:top-12 md:-rotate-45 lg:right-48 lg:-rotate-12`}
            >
              <img src="/src/assets/Plant.webp" alt="" />
            </div>
            <video
              controls
              className={`w-80 h-80 rounded-full border-8 border-blue-200 object-fill`}
              poster="/src/assets/VideoPreview.png"
            ></video>
          </div>
          <div
            className={`lg:w-auto md:w-1/2 flex flex-col gap-4 md:text-left text-center p-12`}
          >
            <h2 className={`text-4xl  font-bold md:w-96`}>
              Limitless learning, more possibilities
            </h2>
            <div
              className={`lg:w-96 text-md flex flex-col gap-6 text-gray-500`}
            >
              <p>
                The University of Rochester is one of the country's top-tier
                research universities. Our campuses are home to 200 academic
                majors, more than 2,000 faculty and instructional staff, and
                some 10,000 students--approximately half of whom are women.
              </p>
              <p>
                Learning at the University of Rochester is also on a very
                personal scale. Rochester remains of the smallest and most
                colleglate among top research universities, with smaller
                classes, a low 10:1 student to teacher ratio, and increased
                interactions with faculty.
              </p>
            </div>

            <div
              className={`flex gap-8 mt-2 text-2xl md:justify-start justify-center`}
            >
              <div>
                <p className={`text-orange-300 font-bold `}>4000</p>
                <small className={`text-orange-300 text-sm`}>Students</small>
              </div>
              <div>
                <p className={`text-rose-500 font-bold `}>260</p>
                <small className={`text-rose-500 text-sm`}>Courses</small>
              </div>
              <div>
                <p className={`text-green-500 font-bold `}>5679</p>
                <small className={`text-green-500 text-sm`}>Hours Video</small>
              </div>
            </div>
          </div>
        </section>
        {/* Third Section */}
        {/* ----------------------------------------------------------------------------- */}
        {/* Fourth Section */}
        <section
          className={`w-full flex items-center gap-4 md:pl-6 md:pr-6 flex-col`}
        >
          <h2 className={`text-4xl font-bold`}>Around the University</h2>
          <div className={`w-full grid-container grid-container--fit p-12`}>
            <VideoCard
              imageUrl={"/src/assets/VideoCard1.webp"}
              title="Get started coding android apps with kotlin"
              genre="Global System"
            />
            <VideoCard
              imageUrl={"/src/assets/VideoCard2.webp"}
              title="A Beginner's Guide to the New Bootstrap 4 Grid"
              genre="Web Development"
            />
            <VideoCard
              imageUrl={"/src/assets/VideoCard3.webp"}
              title="Code a Swift app with Realm Mobile Database"
              genre="Music"
            />
            <VideoCard
              imageUrl={"/src/assets/VideoCard4.webp"}
              title="Modern PHP From the beginning"
              genre="Data science"
            />
          </div>
        </section>
        {/* Fourth Section */}
        {/* ----------------------------------------------------------------------------- */}
        {/* Footer Section */}
        <footer className={``}>
          <div
            className={`grid-container grid-container--fit bg-gray-800 p-12 text-gray-400`}
          >
            <div className={`w-full flex flex-col gap-4`}>
              <img
                src="/src/assets/LogoFooter.webp"
                alt=""
                className={`w-48`}
              />
              <p>
                Edumondo focuses on creating magnificent education websites with
                ease. Take the lead in the race with Learned.
              </p>
              <hr className={` border-gray-500`} />
            </div>
            <div className={`w-full flex flex-col gap-4`}>
              <h2 className={`text-white text-lg font-medium`}>
                FEATURED PROGRAMS
              </h2>
              <ul className={`flex flex-col gap-2`}>
                <li>
                  <a href="">
                    Fixed responsive issue -{" "}
                    <span className={`text-gray-600`}>Just now</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    New Portfolio grid layout -{" "}
                    <span className={`text-gray-600`}>Today</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Tested and approved WP 3.6 -{" "}
                    <span className={`text-gray-600`}>5 Hours ago</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Fixed google map issue -{" "}
                    <span className={`text-gray-600`}>Yesterday</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`w-full flex flex-col gap-4`}>
              <h2 className={`text-white text-lg font-medium`}>LEARNING</h2>
              <ul className={`flex flex-col gap-2`}>
                <li>
                  <a href="">Our Plans</a>
                </li>
                <li>
                  <a href="">Free Trial</a>
                </li>
                <li>
                  <a href="">Academic Solutions</a>
                </li>
                <li>
                  <a href="">Business Solutions</a>
                </li>
              </ul>
            </div>
            <div className={`w-full flex flex-col gap-4`}>
              <h2 className={`text-white text-lg font-medium`}>SUPPORT FORM</h2>
              <p>
                Write your email into below field and join our quick support
                forum.
              </p>
              <div className={`flex `}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`p-1`}
                />
                <button className={`bg-orange-300 text-white p-1`}>
                  GET HELP
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex bg-gray-900 text-gray-500 gap-4 p-6 md:justify-around md:flex-row flex-col items-center`}
          >
            <div>
              <p>Copyright &copy; 2019 Learned</p>
            </div>
            <div className={`flex gap-4 md:flex-row flex-col items-center`}>
              <a href="">Site Map</a>
              <a href="">Privacy Policy</a>
              <a href="">Website Use Policy</a>
              <a href="">Cookie Policy</a>
            </div>
          </div>
        </footer>
        {/* Footer Section*/}
        {/* ----------------------------------------------------------------------------- */}
      </main>
    </>
  );
}

export default App;
