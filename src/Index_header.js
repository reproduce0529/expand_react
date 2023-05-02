import './index.css';

function Index_header() {
    return (
      <div>


<header className="header_wrap header_wrap_main">


    <label className='menu_button' for='menu_input'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </label>

    <input type="checkbox" id='menu_input' className='hidden' />

    <div className='sidebar_menu'>
    <div className="sidebar_menu_box">
        <a href="/" className='sidebar_menu_Logo'>l EXPAND l</a>
        <a href="/Itr" className="sidebar_menu_aTag">Team Expand<span className="hover_bigger_bar"></span></a>
        <a href="/N" className="sidebar_menu_aTag">공지사항<span className="hover_bigger_bar"></span></a>
        <a href="/S" className="sidebar_menu_aTag">서비스<span className="hover_bigger_bar"></span></a>
        <a href="/M" className="sidebar_menu_aTag">구성원<span className="hover_bigger_bar"></span></a>
        <a href="/Ivm" className="sidebar_menu_aTag">투자현황<span className="hover_bigger_bar"></span></a>
        <a href="/H" className="sidebar_menu_aTag">연혁<span className="hover_bigger_bar"></span></a>
        <a href="/P" className="sidebar_menu_aTag">협력 업체<span className="hover_bigger_bar"></span></a>
      </div>
    </div>


    <label for='menu_input' className='header_bg'></label>

    <div className="header_inner">
      <a href='/' className="logo_text" >
        l EXPAND l
      </a>
     
      <div className="menu_box">
        <a href="/Itr" className="menu_aTag">Team Expand<span className="hover_bigger_bar"></span></a>
        <a href="/N" className="menu_aTag">공지사항<span className="hover_bigger_bar"></span></a>
        <a href="/S" className="menu_aTag">서비스<span className="hover_bigger_bar"></span></a>
        <a href="/M" className="menu_aTag">구성원<span className="hover_bigger_bar"></span></a>
        <a href="/Ivm" className="menu_aTag">투자현황<span className="hover_bigger_bar"></span></a>
        <a href="/H" className="menu_aTag">연혁<span className="hover_bigger_bar"></span></a>
        <a href="/P" className="menu_aTag">협력 업체<span className="hover_bigger_bar"></span></a>
      </div>

      <div className="icon_box">
        <img src="../../src/envelope-regular.svg" alt="Send mail" />
      </div>
    </div>
  </header>








      </div>
    );
  }
  
  export default Index_header;
  