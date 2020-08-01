package com.google.sites.medcare.Reminder.medicine;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.google.sites.medcare.R;
import com.google.sites.medcare.Reminder.source.MedicineAlarm;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by gautam on 13/07/17.
 */

public class MedicineAdapter extends RecyclerView.Adapter<MedicineAdapter.MedicineViewHolder> {

    private List<MedicineAlarm> medicineAlarmList;

    public MedicineAdapter(List<MedicineAlarm> medicineAlarmList) {
        this.medicineAlarmList = medicineAlarmList;
    }

    public void replaceData(List<MedicineAlarm> medicineAlarmList) {
        this.medicineAlarmList = medicineAlarmList;
        notifyDataSetChanged();
    }

    @Override
    public MedicineViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.row_medicine, parent, false);
        return new MedicineViewHolder(view);
    }

    @Override
    public void onBindViewHolder(MedicineViewHolder holder, int position) {
        final MedicineAlarm medicineAlarm = medicineAlarmList.get(position);
        if (medicineAlarm == null) {
            return;
        }
        holder.tvMedTime.setText(medicineAlarm.getStringTime());
        holder.tvMedicineName.setText(medicineAlarm.getPillName());
        holder.tvDoseDetails.setText(medicineAlarm.getFormattedDose());
    }

    @Override
    public int getItemCount() {
        return (medicineAlarmList != null && !medicineAlarmList.isEmpty()) ? medicineAlarmList.size() : 0;
    }

    static class MedicineViewHolder extends RecyclerView.ViewHolder {

        @BindView(R.id.tv_med_time)
        TextView tvMedTime;

        @BindView(R.id.tv_medicine_name)
        TextView tvMedicineName;

        @BindView(R.id.tv_dose_details)
        TextView tvDoseDetails;

        @BindView(R.id.iv_medicine_action)
        ImageView ivMedicineAction;

        MedicineViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }
}
