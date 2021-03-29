import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';
function Header() {
    return (
        <div className="header">
            <MenuIcon/>
            <img 
            className="Header__logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAiCAMAAABlRruNAAAAnFBMVEX/////AAAoKCgAAAAKCgoiIiIfHx/FxcVJSUlnZ2cQEBAaGhrn5+dNTU2Kioqzs7M9PT2SkpJTU1Pz8/P/aWkVFRX/Skp+fn6oqKj5+fm9vb2ZmZn/wMB3d3f/pKTX19f/QkL/lZX/09P/YGD/i4s0NDT/ubn/9PT/goL/cHD/FRX/6en/4OBvb2//s7NdXV3/ysr/Kir/eHj/VVXOyPOpAAAEN0lEQVRYhcWY23riIBCAIxBUiMYY2Rw0Zuuhtluzdrvv/247A8RqTVKxft25wZgAP8OcwPOM7Pavi+XyYfP0PJut1+sfKH/X69ns+e1p87B8fN2/eN8uq3XvGlmv7jprMAeJOz7YXEWF8mB75GEY5vpXlsLPsnXoMjyV4OxdnypFg5aOIMursXq936ZLQQWTdnAhaL917AheH4Xm51yMkA6unQNWr/dxyLkihLWveS7JuzAnrt9OXAvdJ6b1LAdO+LCdK6KMMWTyoXXT17MT18Z0GvlEjvEHJ0Sl7Vxl3u/3J4A1hTb/YF/dXD+duP6aTrB9/hTagHaOfVxEk04/4XLCqg2sBB6VeV4oiD/5BMsb3Inr1+dcHuoJwkMi7X5CxLiZ66xn/fByOfXbvmNvd6ZbxbVdTXyio0RZEUpJoVefVUlShNAWpj1yjZMkid5bw5UljKrIMkUTQdVI2+v+cuoZOGmrzmw6gg3khZeB2kSGbsfR6aRmjCmXNMJWSjY+4doqqUa2HRguVm4h0BCqwQJf+Oi6FD9eNXJ5WVsSsLkIDB4MC8yMHzC44tgYD1hggoiMbHvKBcrVzoLtyHD5A0qRheH2DWBxDFdIQcuvzVygyOak+Wr3H3cwS5XeTZiYbMtcgC9EblyEpSX2RkWjL4l+DBbigzYXbVyA/KeDayzB8AuO1o/BQsAS4Qmd04VLpEbbaq5HxM8Qj2ZdXI2ps+aC0VQIEXNrDRicM8ScFDtxUbvvYKve1MTqzLh6J5e3e/r4clH7M4PBfD2gzpHBkc+VC2MOvpdGbfjI+s5cj/WrA8xmsmQktZ6Mg/XducAu/YPmuZarYR9rfXmp0jVCrIMrEV/g8on+n9pUi9aa32z32j6152iur+gLxxmZ7UzyPFea69Y4AeGRWMXfg8voi3AoH4nmujGuejosQLy+P5epbF3z0P7IlVo3vPc+gsBJ4Ma8/ZHrK3bPz+3eyuXU19Q5p1w6TtTx6wYuVNRJnGjl6pQGrjqu5maim7gKvZ0SuSaKbIMb6+gzrjoP4R9QxNY8WRPX4JIL0ysCwRFGJujnvh7N7dzx1MAVWMuAgVEfyIPxG9V3xoWFgw+fS/Ket0NjBlhP4JlhYI8Mses57bGBCw8WhM8TYSon3BCiigr9/owLKhgwpET571yEDivdZAZIJCF87UMx4Hiu3TVx6dAvYdkSt8kbY4bicgsF2RlXrjMEFLXiyLWdCq5XoQMiLEwqW4253QMsvRMuOLPa80xIheRQPQ/0NUjMFeeCBwEVFLkm0B7wxZRyriBmwvMEKyVGD9kE/mNbc9oYUhiFC610kIuaoVU2J1hegBHQHl/iNKmqqL6niKNhlWZeZq9U8JbFvEqHwwhWYm5dsD9WbQV+a6QcV8MiPd7x/J97pqvkZbV4xGu5N7yX+1GLuZjDe7nF6nvv5f4BQute0TRLhLkAAAAASUVORK5CYII=" alt=""/>
        <div className="header__input">
       <input placeholder="Search" type="text"></input>
       <SearchIcon className="header__inputButton"/>
       </div>
       <div className="header__icons">
       <VideoCallIcon className="header__icon"/>
       <AppsIcon className="header__icon"/>
       <NotificationsIcon className="header__icon"/>
       <Avatar alt="Arpitha Naik"src="Arpitha.jpg"/>
       </div>
        </div>
    )
}

export default Header
