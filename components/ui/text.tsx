import { cn } from '@/lib/utils';
import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {
  className?: string;
  children: React.ReactNode;
}

export function Text({ className, children, ...props }: TextProps) {
  return (
    <RNText 
      className={cn('text-base text-foreground', className)} 
      {...props}
    >
      {children}
    </RNText>
  );
}
