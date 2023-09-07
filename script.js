//models are here: https://github.com/mehlko/model/

const logLevel = 1;

function log(text) {
  console.log(text);
}
function info(text) {
  if (logLevel) {
    console.log(text);
  }
}

const {
  Button,
  Alert,
  Autocomplete,
  TextField,
  createFilterOptions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Typography,
  Box,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
  Grid,
  Item,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  TabPanel,
  TabContext,
  TabList,
  TextareaAutosize,
} = MaterialUI;

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = { processModel: '', functions2: ['halllo', 'yuhu'] };
  }

  render() {
    log(this.state);
    return (
      <Box sx={{ width: '100%' }}>
        <h1>Model</h1>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              sx={{ width: '100%' }}
              id="systemInput"
              label="System"
              placeholder="System"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: '100%' }}
              id="userImput"
              label="User"
              placeholder="User"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: '100%' }}
              id="output"
              label="Output"
              placeholder="Output"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ width: '100%' }}>
              Contained
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
const container = document.getElementById('container');
ReactDOM.createRoot(container).render(<Model />);
