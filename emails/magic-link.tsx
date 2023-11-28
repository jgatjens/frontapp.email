import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MagicLinkEmailProps {
  toEmail?: string;
  url?: string;
  fromIp?: string;
  fromLocation?: string;
}

export const MagicLinkEmail = ({
  toEmail = "jgatjens@gmail.com",
  url = "http://localhost:3000/api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fes%2Flogin&token=ac0937297c6b6f69f32fdb0f51e56c5fc9b3001e25ad7abe97ec87d537440e7c&email=jgatjens%40gmail.com",
}: // fromIp = "204.13.186.218",
// fromLocation = "San jose, Costa Rica",
MagicLinkEmailProps) => {
  const previewText = `Please use this magic link to login ${url}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Container className="bg-black w-10 h-9"></Container>
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Login</strong>
            </Heading>
            <Text className="text-black  text-[14px] leading-[14px]">Hello,</Text>
            <Text className="text-black  text-[14px] leading-[14px]">
              Click the button to log in with a magic link.
            </Text>

            <Section className=" mt-[20px] mb-[20px]">
              <Button
                className="bg-[#000000] px-5 py-3 rounded text-white text-[12px] font-semibold no-underline text-center"
                href={url}
              >
                Click here
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser{" "}
              <Link href={url} className="text-blue-600 no-underline">
                here
              </Link>
              .
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for <span className="text-black">{toEmail}</span>.
              {/* This invite was sent from <span className="text-black">{fromIp}</span> located in{" "}
              <span className="text-black">{fromLocation}</span>. */}
              If you were not expecting this invitation, you can ignore this email. If you are
              concerned about your account's safety, please reply to this email to get in touch with
              us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MagicLinkEmail;
