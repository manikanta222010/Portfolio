export function Footer() {
  const leftB = "{";
  const rightB = "}";
  return (
    <footer>
      <p className='thanks green'>Thanks for visiting</p>
      <div>
        <p className='full-logo'><span className='green braces'>{leftB}</span>Manikanta Srinivas Yedla<span className='green braces'>{rightB}</span></p>
        <p>I create stuff with <span className='red'>❤️</span> in <i><strong>NodeJS</strong></i> and <i><strong>React</strong></i></p>
      </div>
      <br />

      <div className='copyrights'>
        <p>Designed and Developed by Manikanta Srinvas Yedla.</p>
        <p>Copyright &copy; 2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
