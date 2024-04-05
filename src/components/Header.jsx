import '../index.css';
import logoClip from '../assets/logo.svg';

export default function Header() {
  return (
    <>
      <div className="section-container">
        Header Content
        {/* Hero Content */}
        <img className="mx-auto my-16" src={logoClip} alt="logo" />
        <h3>A history of everything you copy</h3>
        <p className="section-content">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
    </>
  );
}
