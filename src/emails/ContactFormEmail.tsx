// emails/ContactFormEmail.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Hr,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          
          <Section style={tableContainer}>
            <Row style={row}>
              <Column style={labelColumn}>Name:</Column>
              <Column style={valueColumn}>{name}</Column>
            </Row>
            
            <Row style={row}>
              <Column style={labelColumn}>Email:</Column>
              <Column style={valueColumn}>{email}</Column>
            </Row>
            
            <Row style={row}>
              <Column style={labelColumn}>Message:</Column>
              <Column style={valueColumn}>{message}</Column>
            </Row>
          </Section>
          
          <Hr style={divider} />
          
          <Text style={footer}>
            This email was sent from the contact form on your website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9',
  margin: '0',
  padding: '0',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  border: '1px solid #ddd',
};

const heading = {
  fontSize: '24px',
  color: '#333',
  textAlign: 'center' as const,
  marginBottom: '20px',
};

const tableContainer = {
  marginBottom: '20px',
};

const row = {
  width: '100%',
};

const labelColumn = {
  fontWeight: 'bold',
  padding: '10px',
  backgroundColor: '#f1f1f1',
  width: '30%',
  borderBottom: '1px solid #ddd',
};

const valueColumn = {
  padding: '10px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ddd',
};

const divider = {
  width: '100%',
  border: 'none',
  borderTop: '1px solid #ddd',
  margin: '20px 0',
};

const footer = {
  fontSize: '12px',
  lineHeight: '24px',
  margin: '16px 0',
  color: '#777',
  textAlign: 'center' as const,
  marginTop: '20px',
};