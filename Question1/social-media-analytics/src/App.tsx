import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopUsers from './Components/TopUsers';
import TrendingPosts from './Components/TrendingPosts';
import Feed from './Components/Feed';
import { AppBar, Toolbar, Button } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Top Users</Button>
          <Button color="inherit" component={Link} to="/trending">Trending Posts</Button>
          <Button color="inherit" component={Link} to="/feed">Feed</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
