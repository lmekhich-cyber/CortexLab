export const XP = {
  value: 0,
  sessions: 0,
  init() {
    const stored = localStorage.getItem("xp");
    const storedSessions = localStorage.getItem("sessions");
    this.value = stored ? parseInt(stored, 10) : 0;
    this.sessions = storedSessions ? parseInt(storedSessions, 10) : 0;
    this.updateStats();
  },
  add(points) {
    this.value += points;
    localStorage.setItem("xp", this.value);
    this.updateStats();
  },
  newSession() {
    this.sessions += 1;
    localStorage.setItem("sessions", this.sessions);
    this.updateStats();
  },
  updateStats() {
    const ex = document.getElementById("statExercices");
    const ses = document.getElementById("statSessions");
    const score = document.getElementById("statScore");
    if (ex) ex.textContent = this.value;
    if (ses) ses.textContent = this.sessions;
    if (score) score.textContent = this.value;
  }
};
