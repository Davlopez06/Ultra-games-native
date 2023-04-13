import react, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, Image, Animated, Easing} from "react-native";
import { StyleSheet } from "react-native";
import Logo from '../img/Logo.png'
import Ultra from '../img/Ultra.png'
import { useNavigate } from "react-router-native";
import Style from "../style/style";

const LandingPage = () => {

    const spinValue = useRef(new Animated.Value(0)).current;
    const navigate = useNavigate() 

    useEffect(() => {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }, [spinValue]);

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home');
        },5000)
    },[])

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });

    return (
        <View style={Style.landing}>
            <Animated.Image  style={{ transform: [{ rotate: spin }] }} source={Logo}/>
            <Image source={Ultra}/>
        </View>
    )
}
export default LandingPage;