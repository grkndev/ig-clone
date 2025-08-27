import { cn } from "@/lib/utils";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { Image, ImageProps, View, ViewProps } from "react-native";

interface AvatarContextType {
  imageLoaded: boolean;
  imageError: boolean;
  setImageLoaded: (loaded: boolean) => void;
  setImageError: (error: boolean) => void;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

const useAvatarContext = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be used within Avatar");
  }
  return context;
};

interface AvatarProps extends ViewProps {
  alt?: string;
  className?: string;
  children: ReactNode;
}

export function Avatar({ alt, className, children, ...props }: AvatarProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <AvatarContext.Provider
      value={{
        imageLoaded,
        imageError,
        setImageLoaded,
        setImageError,
      }}
    >
      <View
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        {children}
      </View>
    </AvatarContext.Provider>
  );
}

interface AvatarImageProps extends Omit<ImageProps, "source"> {
  source: ImageProps["source"];
  className?: string;
}

export function AvatarImage({ source, className, ...props }: AvatarImageProps) {
  const { setImageLoaded, setImageError, imageLoaded, imageError } =
    useAvatarContext();

  const handleLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleError = () => {
    setImageLoaded(false);
    setImageError(true);
  };

  const handleLoadStart = () => {
    setImageLoaded(false);
    setImageError(false);
  };

  if (imageError) {
    return null;
  }

  return (
    <Image
      source={source}
      onLoad={handleLoad}
      onError={handleError}
      onLoadStart={handleLoadStart}
      className={cn("aspect-square h-full w-full", className)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      {...props}
    />
  );
}

interface AvatarFallbackProps extends ViewProps {
  className?: string;
  children: ReactNode;
}

export function AvatarFallback({
  className,
  children,
  ...props
}: AvatarFallbackProps) {
  const { imageLoaded, imageError } = useAvatarContext();

  if (imageLoaded && !imageError) {
    return null;
  }

  return (
    <View
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}

export { StoryAvatar } from "./story-avatar";
