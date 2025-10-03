import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Dumbbell, Clock, Users, Award } from 'lucide-react-native';

export default function GymLanding() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Transform Your Body</Text>
          <Text style={styles.heroSubtitle}>Start your fitness journey today with professional trainers and state-of-the-art equipment</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.features}>
        <Text style={styles.sectionTitle}>Why Choose Us</Text>

        <View style={styles.featureGrid}>
          <View style={styles.featureCard}>
            <Dumbbell color="#FF6B35" size={40} />
            <Text style={styles.featureTitle}>Modern Equipment</Text>
            <Text style={styles.featureText}>Latest machines and free weights for all your workout needs</Text>
          </View>

          <View style={styles.featureCard}>
            <Users color="#FF6B35" size={40} />
            <Text style={styles.featureTitle}>Expert Trainers</Text>
            <Text style={styles.featureText}>Certified professionals to guide you every step of the way</Text>
          </View>

          <View style={styles.featureCard}>
            <Clock color="#FF6B35" size={40} />
            <Text style={styles.featureTitle}>Flexible Hours</Text>
            <Text style={styles.featureText}>Open 24/7 to fit your busy schedule</Text>
          </View>

          <View style={styles.featureCard}>
            <Award color="#FF6B35" size={40} />
            <Text style={styles.featureTitle}>Results Guaranteed</Text>
            <Text style={styles.featureText}>Proven programs that deliver real results</Text>
          </View>
        </View>
      </View>

      <View style={styles.pricing}>
        <Text style={styles.sectionTitle}>Membership Plans</Text>

        <View style={styles.pricingGrid}>
          <View style={styles.pricingCard}>
            <Text style={styles.planName}>Basic</Text>
            <Text style={styles.planPrice}>$29<Text style={styles.planPeriod}>/month</Text></Text>
            <View style={styles.planFeatures}>
              <Text style={styles.planFeature}>• Access to gym equipment</Text>
              <Text style={styles.planFeature}>• Locker room access</Text>
              <Text style={styles.planFeature}>• Free WiFi</Text>
            </View>
            <TouchableOpacity style={styles.planButton}>
              <Text style={styles.planButtonText}>Choose Plan</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.pricingCard, styles.popularCard]}>
            <View style={styles.popularBadge}>
              <Text style={styles.popularBadgeText}>POPULAR</Text>
            </View>
            <Text style={styles.planName}>Pro</Text>
            <Text style={styles.planPrice}>$59<Text style={styles.planPeriod}>/month</Text></Text>
            <View style={styles.planFeatures}>
              <Text style={styles.planFeature}>• Everything in Basic</Text>
              <Text style={styles.planFeature}>• Group classes</Text>
              <Text style={styles.planFeature}>• Personal training session</Text>
              <Text style={styles.planFeature}>• Nutrition consultation</Text>
            </View>
            <TouchableOpacity style={[styles.planButton, styles.popularButton]}>
              <Text style={styles.popularButtonText}>Choose Plan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.pricingCard}>
            <Text style={styles.planName}>Elite</Text>
            <Text style={styles.planPrice}>$99<Text style={styles.planPeriod}>/month</Text></Text>
            <View style={styles.planFeatures}>
              <Text style={styles.planFeature}>• Everything in Pro</Text>
              <Text style={styles.planFeature}>• Unlimited personal training</Text>
              <Text style={styles.planFeature}>• Massage therapy</Text>
              <Text style={styles.planFeature}>• Priority booking</Text>
            </View>
            <TouchableOpacity style={styles.planButton}>
              <Text style={styles.planButtonText}>Choose Plan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Ready to Start?</Text>
        <Text style={styles.ctaText}>Join hundreds of members achieving their fitness goals</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Join Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 FitLife Gym. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 27,
    maxWidth: 600,
  },
  ctaButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  features: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 48,
    color: '#1a1a1a',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  featureCard: {
    backgroundColor: '#f8f8f8',
    padding: 32,
    borderRadius: 12,
    alignItems: 'center',
    width: 280,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#1a1a1a',
  },
  featureText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  pricing: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  pricingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  pricingCard: {
    backgroundColor: '#ffffff',
    padding: 32,
    borderRadius: 12,
    width: 300,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  popularCard: {
    borderColor: '#FF6B35',
    transform: [{ scale: 1.05 }],
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: [{ translateX: -40 }],
    backgroundColor: '#FF6B35',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  planName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  planPrice: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#FF6B35',
  },
  planPeriod: {
    fontSize: 18,
    color: '#666666',
  },
  planFeatures: {
    marginBottom: 32,
  },
  planFeature: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 12,
    lineHeight: 24,
  },
  planButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  planButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularButton: {
    backgroundColor: '#FF6B35',
  },
  popularButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cta: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  ctaText: {
    fontSize: 18,
    color: '#cccccc',
    marginBottom: 32,
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 32,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
});
