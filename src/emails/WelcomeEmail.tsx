// emails/WelcomeEmail.tsx
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

export default function WelcomeEmail(p0: {}) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>Welcome to Our Newsletter! 🎉</Heading>
          <Text style={paragraph}>
            Thanks for subscribing to our newsletter. You'll now receive regular updates about our latest products and news.
          </Text>
          <Text style={footer}>
            Best regards,
            <br />
            The Newsletter Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: '#f6f6f6',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
};

const heading = {
  color: '#333333',
  fontSize: '24px',
  marginBottom: '20px',
};

const paragraph = {
  color: '#666666',
  fontSize: '16px',
  lineHeight: '1.5',
};

const footer = {
  marginTop: '30px',
  color: '#888888',
  fontSize: '14px',
};