import React from 'react';
import { ActivityIndicator } from 'react-native';

const LoadingComponent = ({loading, hasError, size, color}) => {
    return loading && !hasError ? 
    ( <ActivityIndicator size={size} color={color}/> ) : 
    null;
}

export default LoadingComponent;