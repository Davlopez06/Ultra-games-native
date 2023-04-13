import React from "react";
import { View, Text } from "react-native";
import Constants  from "expo-constants";
import { NativeRouter, Route, Routes } from "react-router-native";
import LandingPage from "./LandingPage";
import Style from "../style/style";
import HomePage from "./HomePage";

const Main = () => {
    return (
        <NativeRouter>
            <View style={Style.main}>
                <Routes>
                    <Route exact path="/" Component={LandingPage}/>
                    <Route exact path="/home" Component={HomePage}/>
                </Routes>
            </View>
        </NativeRouter>
    )
}

export default Main;