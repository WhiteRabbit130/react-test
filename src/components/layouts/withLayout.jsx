import AuthLayout from "./AuthLayout";
import NonAuthLayout from "./NonAuthLayout";

function withAuthLayout(elements) {
    return <AuthLayout>{ elements }</AuthLayout>
}

function withNonAuthLayout(elements) {
    return <NonAuthLayout>{ elements }</NonAuthLayout>
}

export { withAuthLayout, withNonAuthLayout }