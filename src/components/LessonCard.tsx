import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Lesson } from '@/types/learning';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  status: 'completed' | 'in-progress' | 'locked';
  onPress: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  index,
  status,
  onPress,
}) => {
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in-progress';
  const isLocked = status === 'locked';

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`mb-4 flex-row items-center justify-between rounded-2xl border-2 p-4 ${
        isInProgress
          ? 'border-lingua-purple bg-indigo-50/30'
          : 'border-gray-100 bg-white'
      }`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <View className="flex-1">
        <Text className="mb-1 text-sm font-medium text-gray-400">
          Lesson {index + 1}
        </Text>
        <Text className="text-lg font-bold text-gray-800">{lesson.title}</Text>
        {isInProgress && (
          <Text className="mt-1 text-sm font-semibold text-lingua-purple">
            In progress
          </Text>
        )}
        {!isInProgress && !isCompleted && !isLocked && (
          <Text className="mt-1 text-xs text-gray-400">0 / {lesson.xpReward} XP</Text>
        )}
        {isLocked && (
          <Text className="mt-1 text-xs text-gray-400">0 / {lesson.xpReward} lessons</Text>
        )}
      </View>

      <View className="ml-4 items-center justify-center">
        {isCompleted ? (
          <View className="h-6.5 w-6.5 items-center justify-center rounded-full bg-success">
            <Ionicons name="checkmark" size={16} color="white" />
          </View>
        ) : isInProgress ? (
           <View className="h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
             <Text className="text-2xl">{lesson.icon || '📚'}</Text>
           </View>
        ) : (
          <Ionicons name="lock-closed-outline" size={24} color="#A1A1AA" />
        )}
      </View>
    </TouchableOpacity>
  );
};
