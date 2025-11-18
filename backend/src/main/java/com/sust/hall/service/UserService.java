package com.sust.hall.service;

import com.sust.hall.dto.RegisterRequest;
import com.sust.hall.entity.User;
import com.sust.hall.entity.UserRole;
import com.sust.hall.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(RegisterRequest registerRequest) {
        // Check if email already exists
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RuntimeException("Email already registered: " + registerRequest.getEmail());
        }

        // Validate passwords match
        if (!registerRequest.getPassword().equals(registerRequest.getConfirmPassword())) {
            throw new RuntimeException("Passwords do not match");
        }

        // Validate SUST email
        if (!registerRequest.getEmail().endsWith("@sust.edu")) {
            throw new RuntimeException("Only SUST email addresses are allowed");
        }

        // Create new user
        User user = new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setHallName(registerRequest.getHallName());
        user.setRole(UserRole.STUDENT); // Default role for registrations
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        return userRepository.save(user); // Use the new save method
    }

    // Fix this method signature to match controller
    public User createUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists: " + user.getEmail());
        }
        // Hash password if provided
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        return userRepository.save(user);
    }

    // Fix this method to use User object instead of individual parameters
    public User updateUser(Long id, User userDetails) {
        User existingUser = getUserById(id);
        existingUser.setName(userDetails.getName());
        existingUser.setEmail(userDetails.getEmail());
        existingUser.setHallName(userDetails.getHallName());
        existingUser.setRole(userDetails.getRole());
        
        // Update password only if provided
        if (userDetails.getPassword() != null && !userDetails.getPassword().isEmpty()) {
            existingUser.setPassword(passwordEncoder.encode(userDetails.getPassword()));
        }
        
        return userRepository.save(existingUser);
    }

    // Keep other methods as they are
    public List<User> getAllUsers() {
        return userRepository.findAllUsers();
    }

    public User getUserById(Long id) {
        return userRepository.findUserById(id);
    }

    public List<User> getUsersByHall(String hallName) {
        return userRepository.findUsersByHall(hallName);
    }

    public List<User> getUsersByRole(UserRole role) {
        return userRepository.findUsersByRole(role);
    }

    public void deleteUser(Long id) {
        userRepository.deleteUser(id);
    }

    public List<String> getAllHallNames() {
        return userRepository.findAllHallNames();
    }

    public Integer getUsersCountByHall(String hallName) {
        return userRepository.countUsersByHall(hallName);
    }

    public List<Object[]> getUserStatistics() {
        return userRepository.getUserStatisticsByHall();
    }
}