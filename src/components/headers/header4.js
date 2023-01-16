import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import '../css/Profile.css'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Nse from '../../pages/bse';
import Bse from '../../pages/nse';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
    const { onDrawerToggle } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [imageurl, setImageurl] =React.useState(
        "https://bootdey.com/img/Content/avatar/avatar7.png"
    );
    if (imageurl == "undefined")
        setImageurl("https://bootdey.com/img/Content/avatar/avatar7.png");

    const Change = async (inputimage) => {
        const formData = new FormData();
        formData.append("file", inputimage);
        formData.append("upload_preset", "ghyxgput");
        formData.append("cloud_name", "dy27czstf");
        // await axios.post(
        //   "https://api.cloudinary.com/v1_1/dy27czstf/image/upload", formData).then((response)=>
        //   {
        //     axios.patch(`http://localhost:3001/users/${userdetails.id}`,{imgurl:response.data.secure_url})
        //    setImageurl(response.data.secure_url);
        //   })
    };

    //   // const [obj, setObj] = useState({
    //   //   firstname: userdetails.firstName,
    //   //   lastname: userdetails.lastName,
    //   //   email: userdetails.email,
    //   //   phone: userdetails.phone,
    //   //   address: userdetails.address,
    //   //   city: userdetails.city,
    //   //   state: userdetails.state,
    //   //   pincode: userdetails.pincode,
    //   // });
    const [change,setChange] = React.useState(1);
    const [Robj, setRobj] = React.useState({firstname:"siddu",lastname:"putchlaa",email:"siddu@gmail.com",phone:"90146900412"});
    const [obj, setObj] = React.useState({firstname:"siddu",lastname:"putchlaa",email:"siddu@gmail.com",phone:"90146900412"});
    //  const[newobj,setNewobj] = useState({})
    const [firstNameMsg, setFirstNameMsg] = React.useState("");
    const [lastNameMsg, setLastNameMsg] = React.useState("");
    const [emailMsg, setEmailMsg] =React. useState("");
    const [phoneMsg, setPhoneMsg] =React.useState("");

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObj({ ...obj, [name]: value });
    };

    const updateUserProfile = () => {
        if (obj.firstname === "") {
            setFirstNameMsg("First name is required!");
        } else if (obj.lastname === "") {
            setLastNameMsg("Last name is required!");
        } else if (obj.email === "" || !obj.email.includes("@")) {
            setEmailMsg("Enter valid email!");
        } else if (obj.phone === "" || !obj.phone.match(/^[0-9]{10}$/)) {
            setPhoneMsg("Enter valid phone number!");
            // } else {
            //   setUserDetails({
            //     ...userdetails,
            //     firstName: obj.firstname,
            //     lastName: obj.lastname,
            //     email: obj.email,
            //     phone: obj.phone,
            //     address: obj.address,
            //     city: obj.city,
            //     state: obj.state,
            //     pincode: obj.pincode,
            //     imgurl:imageurl,
            //   });

            //   axios.patch(`http://localhost:3001/users/${userdetails.id}`, {
            //     firstName: obj.firstname,
            //     lastName: obj.lastname,
            //     email: obj.email,
            //     phone: obj.phone,
            //     address: obj.address,
            //     city: obj.city,
            //     state: obj.state,
            //     pincode: obj.pincode,
            //     imgurl:imageurl,
            //   })
            //     .then((res) => {
            //       toast.success("Profile updated successfully!",{position: toast.POSITION.BOTTOM_RIGHT});
            //       console.log(userdetails);
            //     })
            //     .catch((err) => {
            //       alert("Error updating profile!");
            //     });
        }
    };





    return (
        <>
            <React.Fragment>
                <AppBar color="primary" position="sticky" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={1} alignItems="center">
                            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    edge="start"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs />

                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar
                    component="div"
                    color="primary"
                    position="static"
                    elevation={0}
                    sx={{ zIndex: 0 }}
                >
                    <Toolbar>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item xs>
                                <Typography color="inherit" variant="h5" component="h1">
                                    Stock Market Index
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link
                                    href="/"
                                    variant="body2"
                                    sx={{
                                        textDecoration: 'none',
                                        color: lightColor,
                                        '&:hover': {
                                            color: 'common.white',
                                        },
                                    }}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Go to docs
                                </Link>
                            </Grid>

                            <Grid item>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 3 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 50, height: 50 }}>M</Avatar>
                                </IconButton>

                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        <Avatar /> Profile
                                    </MenuItem>

                                    <Divider />

                                    <MenuItem>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>


            </React.Fragment>
            <div style={{backgroundColor:'white',color:'black',height:'100vh'}}>
                <div style={{padding:'2%'}}>


                <div className="cart-header" style={{display: "flex", marginTop: "20px"}}>
                    <h1 style={{"margin-top": "0px", marginLeft: "50px", marginTop: "70px"}}>
                        <i style={{marginRight: "20px"}} className="fas fa-edit"></i>Update your profile</h1>
                </div>

                <hr style={{width: "900px", height: "2px"}}></hr>

                <div style={{paddingTop: "3em"}}>
                    <div className="container">
                        <div className="row gutters">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                <div className="card h-100">
                                    <div className="card-body" style={{height: "130%"}}>
                                        <div className="account-settings">
                                            <div id="user-profile" className="user-profile">
                                                <div id="usera-avatar" className="user-avatar">
                                                    <label htmlFor="filetoupload">
                                                        <div className="profile-pic"
                                                             style={{backgroundImage: `url(${imageurl})`}}>
                                                            <i className="fa fa-camera icon"></i>
                                                            <span>Change Image</span>
                                                        </div>
                                                    </label>
                                                    <input type="file" accept="Image/*" name="filetoupload"
                                                           id="filetoupload"
                                                           onChange={(e) => {
                                                               Change(e.target.files[0]);
                                                           }}>
                                                    </input>
                                                </div>
                                                <h5 style={{marginTop: "15px"}} id="user-name" className="user-name">
                                                    {/* {userdetails.firstName} */}
                                                </h5>
                                                <h6 id="user-email" className="user-email">
                                                    {/* {userdetails.email} */}
                                                </h6>
                                            </div>
                                            <div id="about" className="about">
                                                <h5 id="h5">About</h5>
                                                <p id="p">
                                                    {/* I'm {userdetails.firstName} {userdetails.lastName}. Full Stack Designer I enjoy creating */}
                                                    user-centric, delightful and human experiences.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"> */}
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h3 className="mb-2 text-dark">Personal Details</h3>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">First Name</label>
                                                    <input type="text" name="firstname"
                                                           value={obj.firstname}
                                                           className="form-control"
                                                           style={{marginBottom: "1em"}}
                                                           id="fullname"
                                                           placeholder="First name"
                                                           onChange={(e) => {
                                                               setFirstNameMsg("");
                                                               handleInputs(e);
                                                           }}/>
                                                </div>
                                                <p style={{color: "red"}}>{firstNameMsg}</p>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="website">Last Name</label>
                                                    <input
                                                        type="url"
                                                        name="lastname"
                                                        value={obj.lastname}
                                                        className="form-control"
                                                        style={{marginBottom: "1em"}}
                                                        id="website"
                                                        placeholder="Last Name"
                                                        onChange={(e) => {
                                                            setLastNameMsg("");
                                                            handleInputs(e);
                                                        }}
                                                    />
                                                </div>
                                                {/* <p style={{ color: "red" }}>{lastNameMsg}</p> */}
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="eMail">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={obj.email}
                                                        className="form-control"
                                                        style={{marginBottom: "1em"}}
                                                        id="eMail"
                                                        placeholder="Email ID"
                                                        onChange={(e) => {
                                                            setEmailMsg("");
                                                            handleInputs(e);
                                                        }}
                                                    />
                                                </div>
                                                {/* <p style={{ color: "red" }}>{emailMsg}</p> */}
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={obj.phone}
                                                        className="form-control"
                                                        style={{marginBottom: "1em"}}
                                                        id="phone"
                                                        placeholder="Phone number"
                                                        onChange={(e) => {
                                                            setPhoneMsg("");
                                                            handleInputs(e);
                                                        }}
                                                    />
                                                </div>
                                                {/* <p style={{ color: "red" }}>{phoneMsg}</p> */}
                                            </div>
                                        </div>
                                        {(obj.firstname !== Robj.firstname || obj.lastname !== Robj.lastname || obj.email !== Robj.email || obj.phone !== Robj.phone) ? (
                                            <div className="row gutters">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="text-right" style={{marginTop: "30px"}}>
                                                        <button type="button" id="submit" name="submit"
                                                                className="btn btn-primary" style={{margin: "10px"}}
                                                                onClick={() => {
                                                                    updateUserProfile();
                                                                }}>
                                                            Update
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>) : <div>no changes</div>}
                                        {/* <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right"style={{ marginTop: "30px" }}>
                      <button type="button"  id="submit"   name="submit" className="btn btn-primary" style={{ margin: "10px" }}
                          onClick={() => {
                            updateUserProfile();}}>
                             Update
                        </button>
                      </div>
                    </div>
                  </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

Header.propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;