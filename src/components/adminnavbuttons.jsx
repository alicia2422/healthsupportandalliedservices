// NavButtons.js
import React from "react";
import { Button } from "react-bootstrap";

const NavButtons = () => (
  <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
    <Button variant="secondary" href="/admin/users">
      Users
    </Button>
    <Button variant="secondary" href="/admin/pendingwithdrawals">
      Pending Withdrawals
    </Button>
    <Button variant="secondary" href="/admin/pendingdeposits">
      Pending Deposits
    </Button>
    <Button variant="secondary" href="/admin/approveddeposits">
      Approved Deposits
    </Button>
    <Button variant="secondary" href="/admin/approvedwithdrawals">
      Approved Withdrawals
    </Button>
    <Button variant="secondary" onClick={() => alert("Logging out")}>
      Logout
    </Button>
  </div>
);

export default NavButtons;
