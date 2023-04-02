package no.ntnu.idata2306.group1.webshopbackend;

import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

/**
 * SshTunnel is a utility class that helps establish an SSH tunnel to securely connect to a remote
 * service (e.g., a PostgreSQL database) from a Spring Boot application.
 *
 * It uses the JSch library to create an SSH tunnel with password-based authentication. After
 * creating an instance of this class and establishing the SSH tunnel, local port forwarding can be
 * set up to access the remote service.
 *
 * The tunnel should be closed when it is no longer needed.
 * 
 * @author Mark
 */
public class SshTunnel {

  private Session sshSession;

  /**
   * Creates a new SshTunnel instance and establishes an SSH connection using the provided host,
   * port, user, and password.
   *
   * @param sshHost the SSH server host, must be the internal IPv4 address
   * @param sshPort the SSH server port
   * @param sshUser the SSH server user
   * @param sshPassword the SSH server user's password
   * 
   * @throws JSchException if an error occurs while establishing the SSH connection
   */
  public SshTunnel(String sshHost, int sshPort, String sshUser, String sshPassword)
      throws JSchException {
    JSch jsch = new JSch();
    sshSession = jsch.getSession(sshUser, sshHost, sshPort);
    sshSession.setPassword(sshPassword);
    sshSession.setConfig("StrictHostKeyChecking", "no");
    sshSession.connect();
  }
}
