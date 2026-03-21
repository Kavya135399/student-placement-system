export default function RoleCards() {
  return (
    <div className="roles">
      <h2>Choose Your Role</h2>

      <div className="card-container">
        
        <div className="card">
          <h3>Student</h3>
          <p>Apply for jobs and track your placements</p>
          <button>Student Login</button>
        </div>

        <div className="card">
          <h3>Company</h3>
          <p>Post jobs and hire talented students</p>
          <button>Company Login</button>
        </div>

        <div className="card">
          <h3>Placement Cell</h3>
          <p>Manage placement activities</p>
          <button>Admin Login</button>
        </div>

      </div>
    </div>
  );
}