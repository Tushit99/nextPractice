import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from "@mantine/core";
import sty from "./Auth.module.css";
import { auth } from "../../config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

interface loginParam {
    email: string;
    password: string;
}

interface registerParam extends loginParam {
    name: string;
}

function Auth(props: PaperProps) {
    const [type, toggle] = useToggle(["login", "register"]);
    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
        },
    });

    const login = async ({ email, password }: loginParam) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);  
        } catch (err) {
            console.log(err);  
         }
    };

    const register = async ({ email, password }: registerParam) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);  
            console.log(userCredentials);  
        } catch (err) {  
            console.log(err);  
        } 
    };

    return (
        <div className={sty.top}>
            <Paper radius="md" p="xl" withBorder {...props}>
                <Text size="lg" weight={500}>
                    Welcome to Mantine, {type} with
                </Text>

                <Group grow mb="md" mt="md"></Group>

                <form
                    onSubmit={form.onSubmit(({email,password,name}) => {
                        if (type === "register") { 
                            register({email,password,name}); 
                        } else {
                            login({email,password}); 
                        }
                    })}
                >
                    <Stack>
                        {type === "register" && (
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) =>
                                    form.setFieldValue("name", event.currentTarget.value)
                                }
                                radius="md"
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) =>
                                form.setFieldValue("email", event.currentTarget.value)
                            }
                            error={form.errors.email && "Invalid email"}
                            radius="md"
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue("password", event.currentTarget.value)
                            }
                            error={
                                form.errors.password &&
                                "Password should include at least 6 characters"
                            }
                            radius="md"
                        />

                        {type === "register" && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) =>
                                    form.setFieldValue("terms", event.currentTarget.checked)
                                }
                            />
                        )}
                    </Stack>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="dimmed"
                            onClick={() => toggle()}
                            size="xs"
                        >
                            {type === "register"
                                ? "Already have an account? Login"
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit" radius="xl">
                            {upperFirst(type)}
                        </Button>
                    </Group>
                </form>
            </Paper>
        </div>
    );
}

export default Auth;
