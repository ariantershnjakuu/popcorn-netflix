interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="logo">
      <h1>Popcorn Netflix</h1>
      <span role="img">🎬</span>
    </div>
  );
};

export default Logo;
