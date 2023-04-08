import { FaGithub, FaTiktok, FaCodepen, FaTwitter } from 'react-icons/fa'
import { Socials } from '../../data'
import './style.css'

const SocialIcons = () => (
  <div className='stick_follow_icon'>
    <ul>
      <li>
        <a href={Socials.github} target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
      </li>
      <li>
        <a href={Socials.codepen} target='_blank' rel='noopener noreferrer'>
          <FaCodepen />
        </a>
      </li>
      <li>
        <a href={Socials.tiktok} target='_blank' rel='noopener noreferrer'>
          <FaTiktok />
        </a>
      </li>
      <li>
        <a href={Socials.twitter} target='_blank' rel='noopener noreferrer'>
          <FaTwitter />
        </a>
      </li>
    </ul>
    <p>Follow Me</p>
  </div>
)

export default SocialIcons
