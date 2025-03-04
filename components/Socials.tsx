import Link from 'next/link';
import {FaGithub,  FaLinkedinIn} from 'react-icons/fa';
import {SiWakatime} from 'react-icons/si'
const mySocials = [
  {icon:<FaGithub/>,path:'https://github.com/OnTheFlyCoding'},
  {icon:<FaLinkedinIn/>, path:'www.linkedin.com/in/giovanni-gonzalez-462626282'},
  {icon:<SiWakatime/>, path:'https://wakatime.com/@Yuzu'}
]

const Socials = ({containerStyles,iconStyles}:{
  containerStyles:string;
  iconStyles:string;
}) => {
  return (
    <div className={containerStyles}>
      {mySocials.map((item,i)=>(
        <Link key={i} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials