import React from "react";
import { Box, Button, Flex, Spacer} from '@chakra-ui/react';

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount(){
        if (window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts)
        }
        console.log(isConnected)
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
    <Spacer />
    <Flex
        justify="space-around"
        align="center"
        width="40%"
        padding="30px 30px 30px 30px"
    >
        <Box margin="0 15px">Bekzat</Box>
        <Spacer />
        <Box margin="0 15px">Shyngys</Box>
        <Spacer />
        <Box margin="0 15px">Edil</Box>
        <Spacer />

        {isConnected ? (
        <Box margin="0 15px">Connected</Box>
        ) : (
        <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={connectAccount}
        >
            Connect
        </Button>
        )}
    </Flex>
    </Flex>

    )
}

export default NavBar;