import Link from 'next/link';
import '../spectre.css';
import { Box, Text, Avatar } from 'gestalt';

const Nav = () => (
  <Box
    alignItems="center"
    direction="row"
    display="flex"
    marginStart={-1}
    marginEnd={-1}>
    <Box paddingX={1} padding={4} paddingY={3}>
      <Link prefetch href="/">
        <Avatar name="MB" size="md" />
      </Link>
    </Box>
    <Box paddingX={1}>
      <Text bold color="white">MoviesBuzz</Text>
    </Box>
  </Box>
);

export default Nav;
