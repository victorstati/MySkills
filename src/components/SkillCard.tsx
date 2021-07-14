import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export default function SkillCard({skill, ...rest}: SkillCardProps){
    return (
        <TouchableOpacity style={styles.buttonSkill} {...rest}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textSkill: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    buttonSkill: {
      backgroundColor: '#1f1e35',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10,
    },
  })