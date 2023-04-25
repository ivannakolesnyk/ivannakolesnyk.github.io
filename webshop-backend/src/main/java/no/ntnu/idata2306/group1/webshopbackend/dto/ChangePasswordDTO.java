package no.ntnu.idata2306.group1.webshopbackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Data transfer object for submitting password change requests")
public class ChangePasswordDTO {

    @Schema(description = "The user's current password")
    private String currentPassword;

    @Schema(description = "The user's new password")
    private String newPassword;

    // Getters and setters
    public String getCurrentPassword() {
        return currentPassword;
    }

    public void setCurrentPassword(String currentPassword) {
        this.currentPassword = currentPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
