import { forwardRef } from "react";
import { styled } from '@mui/material/styles';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PersonIcon from '@mui/icons-material/Person';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import PublicIcon from '@mui/icons-material/Public';
import CircleIcon from '@mui/icons-material/Circle';

const ColorlibStepIconRoot = styled('div')(({ownerState }) => ({
    backgroundColor: "navy",
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor:
        "#09795e",
    }),
    ...(ownerState.completed && {
      backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }));

const CircleStepIconRoot = styled('div')(({ownerState }) => ({
    backgroundColor: "navy",
    zIndex: 1,
    color: '#fff',
    width: 10,
    height: 10,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor:
        "#09795e",
    }),
    ...(ownerState.completed && {
      backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }));
  
export const ColorlibStepIcon = forwardRef(function ColorlibStepIcon(props, ref) {
    const { active, completed, className } = props;
  
    const icons = {
      1: <LocalLibraryIcon />,
      2: <PersonIcon />,
      3: <WifiCalling3Icon />,
      4: <CottageRoundedIcon />,
      5: <PublicIcon />
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className} ref={ref}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  });
  
export const CircleStepIcon = forwardRef(function ColorlibStepIcon(props, ref) {
    const { active, completed, className } = props;
  
    const icons = {
      0: <CircleIcon />,
    };
  
    return (
      <CircleStepIconRoot ownerState={{ completed, active }} className={className} ref={ref}>
        {icons[String(props.icon)]}
      </CircleStepIconRoot>
    );
  });
// import { StepIcon } from '@mui/material';
// const StyledStepIcon = styled(StepIcon)(({ theme }) => ({
//     '& .MuiStepIcon-active': {
//     color: theme.palette.secondary.main,
//     paddingTop: "-19em "
//     },
//     '& .MuiStepIcon-completed': {
//     color: theme.palette.secondary.main,
//     marginTop: "-12em"
//     },
//     '& .MuiStepIcon-text': {
//         opacity: '0',
//     },
//     color: "navy",
// }));