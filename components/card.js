import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Card({ team }) {
  return (
    <figure
      className="bg:white border-solid border-b-0 border-l-0 border-2 border-gray-100 md:flex rounded-lg overflow-hidden shadow-lg mt-7 md:mt-0 "
      key={team.name}>
      <img
        src={team.image}
        className="w-40 h-40 lg:w-44 md:h-auto md:rounded-none mx-auto rounded-full object-cover mt-4 md:m-0"
        alt="members of team"
      />
      <div className="m-4 text-center md:text-left md:flex flex-col justify-between">
        <p className="text-xl font-semibold mb-8">{team.description}</p>
        <div>
          <h1 className="text-blue-400 text-lg">{team.name}</h1>
          <h1 className="text-gray-600 text-lg">{team.title}</h1>
          <div className="flex justify-center md:justify-start mt-2 md:m-0 my-auto">
            <a
              href={`https://twitter.com/${team.twitter}`}
              target="_blank"
              rel="noreferrer noopener"
              className="my-auto">
              <FaTwitter className="w-5 h-5 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
            </a>
            <a
              href={`https://www.linkedin.com/in/${team.linkedIn}/`}
              target="_blank"
              rel="noreferrer noopener">
              <FaLinkedin className="w-5 h-55 ml-4  hover:text-linkedIn-200 text-linkedIn-100 transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </figure>
  );
}