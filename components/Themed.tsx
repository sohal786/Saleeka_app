import { Text as DefaultText, View as DefaultView, TextProps as DefaultTextProps, ViewProps as DefaultViewProps } from 'react-native';

interface CustomTextProps extends DefaultTextProps {
  style?: DefaultTextProps['style'];
  [key: string]: any;  // Allow additional props
}

interface CustomViewProps extends DefaultViewProps {
  style?: DefaultViewProps['style'];
  [key: string]: any;  // Allow additional props
}

export function Text(props: CustomTextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText style={[{ color: '#000' }, style]} {...otherProps} />;
}

export function View(props: CustomViewProps) {
  const { style, ...otherProps } = props;
  return <DefaultView style={[{ backgroundColor: '#fff' }, style]} {...otherProps} />;
}
