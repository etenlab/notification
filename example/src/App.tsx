import React, { useState } from "react";
import "./App.css";
import { Discussion, MockLoginForm } from "@eten-lab/discussion-box";

function App() {
  const [mockUserInfo, setMockUserInfo] = useState<{
    userInfo: unknown;
    userInfoType: 'email' | 'name' | 'user_id';
  } | null>(null);

  return (
    <>
      {!mockUserInfo && (
        <MockLoginForm
          setMockUserInfo={({ userInfo, userInfoType }: {
            userInfo: unknown;
            userInfoType: 'email' | 'name' | 'user_id';
          }) => setMockUserInfo({ userInfo, userInfoType })}
        />
      )}
      {mockUserInfo && (
        <Discussion
          tableName="example"
          rowId={1}
          userInfoType={mockUserInfo.userInfoType}
          userInfo={mockUserInfo.userInfo}
          style={{
            height: '800px',
            padding: '0 20px',
          }}
        />
      )}
    </>
  );
}

export default App;
