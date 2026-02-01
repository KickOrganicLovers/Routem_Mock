import GoogleLoginButton from '@/app/_components/button';

// TODO(ukyo): デザイン整える
// TODO(ukyo): loginwithgoogleのエラーハンドリング
// TODO(ukyo): ボタンコンポーネント整理
// TODO(Leon): ログイン中にアクセスした場合のリダイレクト
export default function Page() {
  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLoginButton />
    </div>
  );
}