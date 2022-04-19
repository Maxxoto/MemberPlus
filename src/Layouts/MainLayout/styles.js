import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2}px - ${theme.spacing(1)})`,
    overflow: 'hidden',
    position: 'relative'
  },
  content: {
    width: '100%'
  }
}));

export default useStyles;
