import React, { useEffect, useState } from 'react';
import { fetchAllPosts, fetchAllUsers, fetchCommentsForPost } from '../api/api';
import { User, Post } from '../types';
import { Box, Typography, Card, CardContent } from '@mui/material';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState<User[]>([]);

  useEffect(() => {
    const load = async () => {
      const users: User[] = await fetchAllUsers();
      const posts: Post[] = await fetchAllPosts();

      const commentCounts: { [userId: number]: number } = {};

      for (const post of posts) {
        const commentsData = await fetchCommentsForPost(post.id);
        const count = commentsData.comments.length;
        commentCounts[post.userid] = (commentCounts[post.userid] || 0) + count;
      }

      const sortedUserIds = Object.entries(commentCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([id]) => parseInt(id));

      const top = users.filter(user => sortedUserIds.includes(user.id));
      setTopUsers(top);
    };

    load();
  }, []);

  return (
    <Box>
      <Typography variant="h4">Top Users</Typography>
      {topUsers.map(user => (
        <Card key={user.id} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h6">{user.name}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TopUsers;