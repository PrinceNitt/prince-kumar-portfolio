const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_54pvr7p",
        "template_e4c5u8m",
        form.current,
        "WBubUU3xXG8VndH4D"
      )
      .then(
        (result) => {
          alert("Message Sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + (error.text || error.message || "Unknown error"));
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="email" />
          <ContactInput placeholder="Your Name" name="name" />
          <ContactInput placeholder="Subject" name="title" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};
