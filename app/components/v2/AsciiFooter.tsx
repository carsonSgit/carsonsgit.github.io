const PENGUIN = `    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'\\_   _/\`\\
\\___)=(___/`;

const AsciiFooter = () => {
	return (
		<footer className="ascii-footer">
			<pre className="ascii-footer__art" aria-hidden="true">
				{PENGUIN}
			</pre>
			<p className="ascii-footer__tagline">
				built with next.js & commit mono
			</p>
		</footer>
	);
};

export default AsciiFooter;
