import { Card, Form, EmailInput, PassInput, Button } from "./form";

export default function LoginForm() {

    return(
        <Card>
            <Form>
                <EmailInput type="email" />
                <PassInput type="password" />
                <Button>Submit</Button>
            </Form>
        </Card>
    );
}