import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Dumbbell, Clock, Users, Award, MapPin, Phone, Mail, TrendingUp, Heart, Shield } from 'lucide-react-native';
import LeadFormModal from '../components/LeadFormModal';

export default function GymLanding() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.hero}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Transform Your Body,{'\n'}Transform Your Life</Text>
            <Text style={styles.heroSubtitle}>Join FitLife Gym and experience world-class fitness training with certified professionals, cutting-edge equipment, and a supportive community dedicated to your success</Text>
            <TouchableOpacity style={styles.ctaButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.ctaButtonText}>Start Free Trial</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5000+</Text>
            <Text style={styles.statLabel}>Active Members</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Expert Trainers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15+</Text>
            <Text style={styles.statLabel}>Years Experience</Text>
          </View>
        </View>

        <View style={styles.about}>
          <Text style={styles.sectionTitle}>Welcome to FitLife Gym</Text>
          <Text style={styles.aboutText}>
            At FitLife Gym, we believe fitness is not just about building muscles, it's about building a better version of yourself. Our state-of-the-art facility spans over 20,000 square feet, featuring the latest equipment from leading brands, specialized training zones, and amenities designed to support your fitness journey.
          </Text>
          <Text style={styles.aboutText}>
            Whether you're a beginner taking your first step or an experienced athlete pushing your limits, our dedicated team of certified trainers is here to guide you every step of the way with personalized training programs tailored to your goals.
          </Text>
        </View>

        <View style={styles.features}>
          <Text style={styles.sectionTitle}>Why Choose FitLife Gym</Text>

          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <Dumbbell color="#FF6B35" size={40} />
              <Text style={styles.featureTitle}>Premium Equipment</Text>
              <Text style={styles.featureText}>Latest cardio machines, free weights, resistance equipment, and specialized training gear from top brands like Life Fitness and Hammer Strength</Text>
            </View>

            <View style={styles.featureCard}>
              <Users color="#FF6B35" size={40} />
              <Text style={styles.featureTitle}>Certified Trainers</Text>
              <Text style={styles.featureText}>Our team of 50+ certified professionals hold credentials from ACE, NASM, and ISSA, with specialized expertise in strength training, weight loss, and athletic performance</Text>
            </View>

            <View style={styles.featureCard}>
              <Clock color="#FF6B35" size={40} />
              <Text style={styles.featureTitle}>24/7 Access</Text>
              <Text style={styles.featureText}>Work out on your schedule with round-the-clock access, secure entry system, and well-lit parking for your convenience and safety</Text>
            </View>

            <View style={styles.featureCard}>
              <Award color="#FF6B35" size={40} />
              <Text style={styles.featureTitle}>Proven Results</Text>
              <Text style={styles.featureText}>92% of our members achieve their fitness goals within 6 months with our science-backed training programs and nutrition guidance</Text>
            </View>

            <View style={styles.featureCard}>
              <TrendingUp color="#FF6B35" size={40} />
              <Text style={styles.featureTitle}>Group Classes</Text>
              <Text style={styles.featureText}>Over 100 weekly classes including HIIT, Yoga, Spinning, Pilates, Zumba, and more, led by experienced instructors in spacious studios</Text>
            </View>

            <View style={styles.featureCard}>
              <Heart color="#FF6B35" size={40} />
              <Text style={styles.featureTitle}>Wellness Programs</Text>
              <Text style={styles.featureText}>Comprehensive health assessments, nutrition counseling, meal planning, and wellness workshops to support your holistic health journey</Text>
            </View>
          </View>
        </View>

        <View style={styles.facilities}>
          <Text style={styles.sectionTitle}>Our Facilities</Text>
          <View style={styles.facilitiesGrid}>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityTitle}>• Cardio Zone</Text>
              <Text style={styles.facilityText}>Treadmills, ellipticals, bikes, and rowing machines with entertainment screens</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityTitle}>• Strength Training Area</Text>
              <Text style={styles.facilityText}>Complete range of free weights, barbells, dumbbells, and resistance machines</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityTitle}>• Functional Training Zone</Text>
              <Text style={styles.facilityText}>Battle ropes, kettlebells, TRX systems, and agility equipment</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityTitle}>• Group Fitness Studios</Text>
              <Text style={styles.facilityText}>3 spacious studios with professional sound systems and climate control</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityTitle}>• Locker Rooms & Showers</Text>
              <Text style={styles.facilityText}>Clean, modern facilities with complimentary towels and toiletries</Text>
            </View>
            <View style={styles.facilityItem}>
              <Text style={styles.facilityTitle}>• Juice Bar & Lounge</Text>
              <Text style={styles.facilityText}>Healthy snacks, protein shakes, and recovery drinks</Text>
            </View>
          </View>
        </View>

        <View style={styles.pricing}>
          <Text style={styles.sectionTitle}>Flexible Membership Plans</Text>
          <Text style={styles.pricingSubtitle}>Choose the plan that fits your lifestyle. All memberships include free access to locker rooms, WiFi, and parking</Text>

          <View style={styles.pricingGrid}>
            <View style={styles.pricingCard}>
              <Text style={styles.planName}>Basic</Text>
              <Text style={styles.planPrice}>$29<Text style={styles.planPeriod}>/month</Text></Text>
              <Text style={styles.planDescription}>Perfect for getting started</Text>
              <View style={styles.planFeatures}>
                <Text style={styles.planFeature}>• 24/7 gym access</Text>
                <Text style={styles.planFeature}>• Access to all equipment</Text>
                <Text style={styles.planFeature}>• Locker room facilities</Text>
                <Text style={styles.planFeature}>• Free WiFi & parking</Text>
                <Text style={styles.planFeature}>• Fitness assessment</Text>
              </View>
              <TouchableOpacity style={styles.planButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.planButtonText}>Choose Plan</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.pricingCard, styles.popularCard]}>
              <View style={styles.popularBadge}>
                <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
              </View>
              <Text style={styles.planName}>Pro</Text>
              <Text style={styles.planPrice}>$59<Text style={styles.planPeriod}>/month</Text></Text>
              <Text style={styles.planDescription}>For serious fitness enthusiasts</Text>
              <View style={styles.planFeatures}>
                <Text style={styles.planFeature}>• Everything in Basic</Text>
                <Text style={styles.planFeature}>• Unlimited group classes</Text>
                <Text style={styles.planFeature}>• 2 personal training sessions/month</Text>
                <Text style={styles.planFeature}>• Nutrition consultation</Text>
                <Text style={styles.planFeature}>• Guest passes (2/month)</Text>
                <Text style={styles.planFeature}>• Towel service</Text>
              </View>
              <TouchableOpacity style={[styles.planButton, styles.popularButton]} onPress={() => setModalVisible(true)}>
                <Text style={styles.popularButtonText}>Choose Plan</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pricingCard}>
              <Text style={styles.planName}>Elite</Text>
              <Text style={styles.planPrice}>$99<Text style={styles.planPeriod}>/month</Text></Text>
              <Text style={styles.planDescription}>Ultimate fitness experience</Text>
              <View style={styles.planFeatures}>
                <Text style={styles.planFeature}>• Everything in Pro</Text>
                <Text style={styles.planFeature}>• Unlimited personal training</Text>
                <Text style={styles.planFeature}>• Custom meal planning</Text>
                <Text style={styles.planFeature}>• Monthly body composition analysis</Text>
                <Text style={styles.planFeature}>• Massage therapy (2/month)</Text>
                <Text style={styles.planFeature}>• Priority class booking</Text>
                <Text style={styles.planFeature}>• Free guest passes (5/month)</Text>
              </View>
              <TouchableOpacity style={styles.planButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.planButtonText}>Choose Plan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.guarantee}>
          <Shield color="#FF6B35" size={60} />
          <Text style={styles.guaranteeTitle}>30-Day Money-Back Guarantee</Text>
          <Text style={styles.guaranteeText}>
            We're confident you'll love FitLife Gym. If you're not completely satisfied within your first 30 days, we'll refund your membership fee, no questions asked.
          </Text>
        </View>

        <View style={styles.contact}>
          <Text style={styles.sectionTitle}>Visit Us Today</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <MapPin color="#FF6B35" size={24} />
              <Text style={styles.contactText}>123 Fitness Street, Health City, HC 12345</Text>
            </View>
            <View style={styles.contactItem}>
              <Phone color="#FF6B35" size={24} />
              <Text style={styles.contactText}>(555) 123-4567</Text>
            </View>
            <View style={styles.contactItem}>
              <Mail color="#FF6B35" size={24} />
              <Text style={styles.contactText}>info@fitlifegym.com</Text>
            </View>
          </View>
          <Text style={styles.hoursTitle}>Operating Hours</Text>
          <Text style={styles.hoursText}>Monday - Sunday: Open 24 Hours</Text>
          <Text style={styles.hoursText}>Staff Available: 6 AM - 10 PM Daily</Text>
        </View>

        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>Ready to Start Your Transformation?</Text>
          <Text style={styles.ctaText}>Join over 5,000 members who are already achieving their fitness goals at FitLife Gym</Text>
          <TouchableOpacity style={styles.ctaButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.ctaButtonText}>Get Your Free Trial</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 FitLife Gym. All rights reserved.</Text>
          <Text style={styles.footerText}>Building Stronger Bodies, Building Better Lives</Text>
        </View>
      </ScrollView>

      <LeadFormModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
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
    lineHeight: 50,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 27,
    maxWidth: 700,
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
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    flexWrap: 'wrap',
  },
  statItem: {
    alignItems: 'center',
    minWidth: 120,
    marginVertical: 10,
  },
  statNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  statLabel: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  about: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  aboutText: {
    fontSize: 17,
    color: '#333333',
    lineHeight: 28,
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 900,
    alignSelf: 'center',
  },
  features: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
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
    backgroundColor: '#ffffff',
    padding: 32,
    borderRadius: 12,
    alignItems: 'center',
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
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
  facilities: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  facilitiesGrid: {
    maxWidth: 900,
    alignSelf: 'center',
  },
  facilityItem: {
    marginBottom: 24,
  },
  facilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  facilityText: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    paddingLeft: 20,
  },
  pricing: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  pricingSubtitle: {
    fontSize: 17,
    color: '#666666',
    textAlign: 'center',
    marginTop: -32,
    marginBottom: 40,
    maxWidth: 700,
    alignSelf: 'center',
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
    width: 320,
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
    transform: [{ translateX: -55 }],
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
    marginBottom: 8,
    color: '#1a1a1a',
  },
  planPrice: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FF6B35',
  },
  planPeriod: {
    fontSize: 18,
    color: '#666666',
  },
  planDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 24,
    fontStyle: 'italic',
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
  guarantee: {
    backgroundColor: '#ffffff',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  guaranteeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  guaranteeText: {
    fontSize: 17,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 700,
  },
  contact: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  contactInfo: {
    marginBottom: 32,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  contactText: {
    fontSize: 17,
    color: '#333333',
  },
  hoursTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  hoursText: {
    fontSize: 17,
    color: '#666666',
    marginBottom: 6,
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
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 18,
    color: '#cccccc',
    marginBottom: 32,
    textAlign: 'center',
    maxWidth: 600,
  },
  footer: {
    paddingVertical: 32,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
});
