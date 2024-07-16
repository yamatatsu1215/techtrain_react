import { Box, Link, Text } from "@yamada-ui/react";
import './css/header.css';

const Header = () => {
    return (
        <Box className="header">
            <Text className="board">
                <Link href="/threads">
                    掲示板
                </Link>
            </Text>
            <Link href="/threads/new" className="link">新規作成へ</Link>
        </Box>
    );
}

export default Header;