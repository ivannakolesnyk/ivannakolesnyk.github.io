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

  /**
   * Creates a local port forwarding from the specified local port to the specified remote host and
   * port.
   *
   * @param remotePort the remote service port
   * @param remoteHost the remote service host, must be the public IPv6 address
   * @param localPort the local port to forward
   * @return The actual local port that was used for forwarding
   * 
   * @throws JSchException if an error occurs while setting up the local port forwarding
   */
  public int createLocalForwarding(int remotePort, String remoteHost, int localPort)
      throws JSchException {
    return sshSession.setPortForwardingL(localPort, remoteHost, remotePort);
  }

  /**
   * Closes the SSH tunnel by disconnecting the SSH session. This method should be called when the
   * tunnel is no longer needed.
   */
  public void close() {
    if (sshSession != null) {
      sshSession.disconnect();
    }
  }
}
